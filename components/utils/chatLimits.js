import { auth } from "../../firebase/firebaseConfig";
import { db } from "../../firebase/firebaseConfig";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

const FREE_USER_DAILY_LIMIT = 12;

export const checkAndUpdateChatLimit = async () => {
  try {
    const userId = auth.currentUser?.uid;
    if (!userId) throw new Error('User not authenticated');

    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);
    const today = new Date().toISOString().split('T')[0];

    if (!userDoc.exists()) {
      // First time user, create document with limits
      await setDoc(userRef, {
        isPro: false,
        chatCount: 1,
        lastChatDate: today,
        dailyLimit: FREE_USER_DAILY_LIMIT
      });
      return { canChat: true, remainingChats: FREE_USER_DAILY_LIMIT - 1 };
    }

    const userData = userDoc.data();
    
    // Reset count if it's a new day
    if (userData.lastChatDate !== today) {
      await updateDoc(userRef, {
        chatCount: 1,
        lastChatDate: today
      });
      return { 
        canChat: true, 
        remainingChats: (userData.isPro ? Infinity : FREE_USER_DAILY_LIMIT - 1)
      };
    }

    // Pro users have unlimited chats
    if (userData.isPro) {
      await updateDoc(userRef, {
        chatCount: userData.chatCount + 1
      });
      return { canChat: true, remainingChats: Infinity };
    }

    // Check if user has reached daily limit
    if (userData.chatCount >= FREE_USER_DAILY_LIMIT) {
      return { 
        canChat: false, 
        remainingChats: 0,
        error: 'Daily chat limit reached. Upgrade to Pro for unlimited chats!'
      };
    }

    // Increment chat count
    await updateDoc(userRef, {
      chatCount: userData.chatCount + 1
    });

    return { 
      canChat: true, 
      remainingChats: FREE_USER_DAILY_LIMIT - (userData.chatCount + 1)
    };
  } catch (error) {
    console.error('Error checking chat limit:', error);
    throw new Error('Failed to check chat limit. Please try again.');
  }
};
