import React, { useState, useEffect, useRef, memo, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Animated,
  ActivityIndicator,
  Alert,
  Modal,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getAIResponse } from "../../components/utils/utils";
import { addChatMessage, subscribeChatMessages } from "../../FirestoreServices/firestoreService";
import { checkAndUpdateChatLimit } from "../../components/utils/chatLimits";
import { upgradeToPro } from "../../FirestoreServices/subscriptionService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles.temp";
import MessageItem from "../../components/MessageItem/MessageItem";

const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#1E90FF",
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
  },
  buttonContainer: {
    flexDirection: "column",
    width: "100%",
    gap: 10,
  },
  button: {
    borderRadius: 10,
    padding: 12,
    width: "100%",
    alignItems: "center",
  },
  upgradeButton: {
    backgroundColor: "#1E90FF",
  },
  cancelButton: {
    backgroundColor: "#f5f5f5",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

const ArtificialIntelligence = () => {
  const navigation = useNavigation();
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [remainingChats, setRemainingChats] = useState(10);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const listRef = useRef(null);

  // Error message template
  const createErrorMessage = (message) => ({
    id: Date.now().toString() + "_error",
    content: message,
    text: message,
    sender: "system",
    isError: true,
    timestamp: new Date().toISOString()
  });

  useEffect(() => {
    const loadMessages = async () => {
      try {
        // Load from local storage
        const stored = await AsyncStorage.getItem("chatMessages");
        if (stored) {
          const parsedMessages = JSON.parse(stored);
          setMessages(parsedMessages);
        }

        // Subscribe to Firestore updates
        const unsubscribe = subscribeChatMessages((firestoreMessages) => {
          // Ensure all messages have both content and text properties
          const normalizedMessages = firestoreMessages
            .map(msg => ({
              ...msg,
              content: msg.content || msg.text,
              text: msg.text || msg.content
            }))
            .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
          
          setMessages(normalizedMessages);
          AsyncStorage.setItem("chatMessages", JSON.stringify(normalizedMessages));
        });

        return unsubscribe;
      } catch (error) {
        console.error("Error loading messages:", error);
        setMessages([createErrorMessage("Error loading messages. Please try again later.")]);
      }
    };

    loadMessages();
  }, []);

  const handleUpgrade = async () => {
    if (!upgradePro) return;

    try {
      setIsLoading(true);
      await upgradeToPro();
      setRemainingChats(Infinity);
      setShowUpgradeModal(false);
      // We'll handle the success alert in useEffect
    } catch (error) {
      console.error('Upgrade error:', error);
      // We'll handle the error alert in useEffect
    } finally {
      setIsLoading(false);
    }
  };

  // Handle alerts in useEffect to ensure component is mounted
  const [alertConfig, setAlertConfig] = useState(null);
  useEffect(() => {
    if (alertConfig) {
      const timer = setTimeout(() => {
        Alert.alert(alertConfig.title, alertConfig.message, alertConfig.buttons);
        setAlertConfig(null);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [alertConfig]);

  const handleSend = async () => {
    if (userMessage.trim() === "" || isLoading) return;

    try {
      const { canChat, remainingChats: remaining } = await checkAndUpdateChatLimit();
      if (!canChat) {
        Alert.alert(
          "Daily Limit Reached",
          "You've used all 12 chats for today. Would you like to upgrade to Pro for unlimited chats?",
          [
            {
              text: "Upgrade",
              onPress: () => setShowUpgradeModal(true)
            },
            {
              text: "Maybe Later",
              style: "cancel",
              onPress: () => {
                // Optional: Show when the limit will reset
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                tomorrow.setHours(0, 0, 0, 0);
                const timeUntilReset = tomorrow - new Date();
                const hoursUntilReset = Math.floor(timeUntilReset / (1000 * 60 * 60));
                Alert.alert(
                  "Limit Resets Soon",
                  `Your chat limit will reset in ${hoursUntilReset} hours.`
                );
              }
            }
          ]
        );
        return;
      }

      setRemainingChats(remaining);
      
      // Warn user when they're close to the limit
      if (remaining === 2) {
        setAlertConfig({
          title: "Almost at Limit",
          message: "You have 2 chats remaining today. Consider upgrading to Pro for unlimited chats!",
          buttons: [
            {
              text: "Upgrade Now",
              onPress: () => setShowUpgradeModal(true)
            },
            {
              text: "Continue",
              style: "cancel"
            }
          ]
        });
      }
      
      const text = userMessage.trim();
      setUserMessage("");
      setIsLoading(true);

      // Create and send user message
      const newMsg = {
        id: Date.now().toString(),
        content: text,
        text: text,
        sender: "user",
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, newMsg]);
      await AsyncStorage.setItem("chatMessages", JSON.stringify([...messages, newMsg]));
      await addChatMessage(text, "user");

      // Get AI response
      const aiResponse = await getAIResponse(text);
      if (!aiResponse || typeof aiResponse !== 'string') {
        throw new Error('Invalid response from AI service');
      }

      // Create and send AI message
      const newAiMsg = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        text: aiResponse,
        sender: "ai",
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, newAiMsg]);
      await AsyncStorage.setItem("chatMessages", JSON.stringify([...messages, newMsg, newAiMsg]));
      await addChatMessage(aiResponse, "ai");
      
      // Scroll to top
      listRef.current?.scrollToOffset({ offset: 0, animated: true });

    } catch (error) {
      console.error("Error in chat:", error);
      const errorMessage = error.message.includes('API') 
        ? 'Sorry, the AI service is temporarily unavailable. Please try again later.'
        : error.message;
      setMessages(prev => [createErrorMessage(errorMessage), ...prev]);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showUpgradeModal}
        onRequestClose={() => setShowUpgradeModal(false)}
      >
        <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            <Text style={modalStyles.modalTitle}>Upgrade to Pro</Text>
            <Text style={modalStyles.modalText}>
              You've reached your daily chat limit. Upgrade to Pro for unlimited chats!
            </Text>
            <View style={modalStyles.buttonContainer}>
              <TouchableOpacity
                style={[modalStyles.button, modalStyles.upgradeButton]}
                onPress={handleUpgrade}
              >
                <Text style={modalStyles.buttonText}>Upgrade Now</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[modalStyles.button, modalStyles.cancelButton]}
                onPress={() => setShowUpgradeModal(false)}
              >
                <Text style={[modalStyles.buttonText, { color: "#666" }]}>Maybe Later</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={[styles.header, styles.holographicEffect]}>
        <Text style={[styles.headerTitle, styles.neonText]}>AI Neural Network</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>← TaskList</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.contentContainer}>
        <FlatList
          ref={listRef}
          data={messages}
          inverted
          keyExtractor={useCallback((item) => item.id, [])}
          contentContainerStyle={{ padding: 10, paddingBottom: 100 }}
          removeClippedSubviews={true}
          maxToRenderPerBatch={10}
          updateCellsBatchingPeriod={50}
          initialNumToRender={10}
          windowSize={21}
          renderItem={useCallback(({ item }) => <MessageItem item={item} />, [])}
          getItemLayout={useCallback((_, index) => ({
            length: 80,
            offset: 80 * index,
            index,
          }), [])}
        />

        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator color="#1E90FF" size="small" />
            <Text style={styles.loadingText}>AI is thinking...</Text>
          </View>
        )}

        <View style={styles.limitIndicator}>
          <Text style={styles.limitText}>
            {remainingChats === Infinity
              ? "Pro User - Unlimited Chats"
              : `${remainingChats} chats remaining today`}
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Type your message..."
            placeholderTextColor="rgba(255,255,255,0.5)"
            value={userMessage}
            onChangeText={setUserMessage}
            style={styles.TextThing}
            multiline
            editable={!isLoading}
          />
          <TouchableOpacity
            onPress={handleSend}
            style={[styles.sendButton, (isLoading || remainingChats === 0) && { opacity: 0.5 }]}
            disabled={isLoading || userMessage.trim() === "" || remainingChats === 0}
          >
            <Text style={{ color: "white", fontSize: 20 }}>→</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ArtificialIntelligence;
