import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getAIResponse } from "../../components/utils/utils";
import { subscribeChatMessages, addChatMessage } from "../../FirestoreServices/firestoreService";
import AsyncStorage from "@react-native-async-storage/async-storage"; // local storage
import styles from "./styles";

const { width, height } = Dimensions.get("window");

const ArtificialIntelligence = () => {
  const navigation = useNavigation();

  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Animation refs
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-50)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  // Stargazing animation refs (simplified)
  const rotateAnim = useRef(new Animated.Value(0)).current;

  // Load messages from Firestore & AsyncStorage
  useEffect(() => {
    const unsubscribe = subscribeChatMessages((chats) => {
      setMessages(chats);
      AsyncStorage.setItem("chatMessages", JSON.stringify(chats)); // save locally
    });

    // Load from AsyncStorage if offline
    const loadLocalMessages = async () => {
      const local = await AsyncStorage.getItem("chatMessages");
      if (local) setMessages(JSON.parse(local));
    };
    loadLocalMessages();

    return () => unsubscribe();
  }, []);

  // Animations
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 800, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, friction: 4, useNativeDriver: true }),
      Animated.loop(Animated.timing(rotateAnim, { toValue: 1, duration: 10000, useNativeDriver: true })),
    ]).start();
  }, []);

  const spin = rotateAnim.interpolate({ inputRange: [0, 1], outputRange: ["0deg", "360deg"] });

  const handleSend = async () => {
    if (userMessage.trim() === "") return;

    const text = userMessage;
    setUserMessage("");

    // Update local state immediately
    const newMsg = { id: Date.now().toString(), text, sender: "user" };
    setMessages(prev => [...prev, newMsg]);
    await AsyncStorage.setItem("chatMessages", JSON.stringify([...messages, newMsg]));

    // Save to Firestore
    await addChatMessage(text, "user");

    // Get AI response
    await getAIResponse(text); // AI response will be auto-saved in Firestore and trigger update
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <Animated.View style={{ flex: 1, opacity: fadeAnim, transform: [{ translateY: slideAnim }, { scale: scaleAnim }] }}>
          {/* Header */}
          <View style={[styles.header, styles.holographicEffect]}>
            <Text style={[styles.headerTitle, styles.neonText]}>AI Neural Network</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.backButtonText}>← TaskList</Text>
            </TouchableOpacity>
          </View>

          {/* Chat Messages */}
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ padding: 10 }}
            inverted
            renderItem={({ item }) => (
              <View
                style={{
                  alignSelf: item.sender === "user" ? "flex-end" : "flex-start",
                  backgroundColor: item.sender === "user" ? "#1E90FF" : "#555",
                  padding: 10,
                  borderRadius: 10,
                  marginVertical: 5,
                  maxWidth: "80%",
                }}
              >
                <Text style={{ color: "white" }}>{item.text}</Text>
              </View>
            )}
          />

          {/* Input Area */}
          <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
            <TextInput
              placeholder="Type your message..."
              placeholderTextColor="rgba(255,255,255,0.5)"
              value={userMessage}
              onChangeText={setUserMessage}
              style={{
                flex: 1,
                height: 45,
                paddingHorizontal: 10,
                backgroundColor: "#333",
                color: "white",
                borderRadius: 8,
              }}
            />
            <TouchableOpacity
              onPress={handleSend}
              style={{
                marginLeft: 10,
                padding: 10,
                backgroundColor: "#1E90FF",
                borderRadius: 8,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Send</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ArtificialIntelligence;
