import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveMessagesLocally = async (messages) => {
  try {
    await AsyncStorage.setItem("chatMessages", JSON.stringify(messages));
  } catch (e) {
    console.error("Failed to save messages locally:", e);
  }
};

export const loadMessagesLocally = async () => {
  try {
    const saved = await AsyncStorage.getItem("chatMessages");
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error("Failed to load messages locally:", e);
    return [];
  }
};
