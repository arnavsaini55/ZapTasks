// import React, { useState, useRef } from "react";
// import {
//   TextInput,
//   View,
//   Text,
//   TouchableOpacity,
//   Animated,
// } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import { db, auth } from "../../firebase/firebaseConfig";  // ✅ import auth
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import styles from "../../components/TaskInput/style";

// const TaskInput = () => {
//   const [task, setTask] = useState("");
//   const [priority, setPriority] = useState("high");
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   // ✅ use subcollection based on logged-in user
//   const tasksCollection = collection(db, "users", auth.currentUser.uid, "tasks");

//   const addTask = async () => {
//     if (task.trim() === "") return;

//     await addDoc(tasksCollection, {
//       text: task,
//       done: false,
//       priority: priority,
//       createdAt: serverTimestamp(),
//     });

//     setTask("");
//     setPriority("high");

//     fadeAnim.setValue(0);
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//   };

//   return (
//     <View style={styles.container}>
//       <Picker
//         selectedValue={priority}
//         onValueChange={(value) => setPriority(value)}
//         style={{ marginBottom: 10 }}
//       >
//         <Picker.Item label="High" value="high" />
//         <Picker.Item label="Medium" value="medium" />
//         <Picker.Item label="Low" value="low" />
//       </Picker>

//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.textInput}
//           placeholder="Add a new task..."
//           value={task}
//           onChangeText={setTask}
//           onSubmitEditing={addTask}
//         />
//         <TouchableOpacity style={styles.addButton} onPress={addTask}>
//           <Text style={styles.addButtonText}>+</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default TaskInput;




import React, { useState, useRef } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { db, auth } from "../../firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import styles from "../../components/TaskInput/style";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("high");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const successAnim = useRef(new Animated.Value(0)).current;

  const tasksCollection = collection(db, "users", auth.currentUser.uid, "tasks");

  const addTask = async () => {
    if (task.trim() === "") return;

    setIsLoading(true);
    
    // Button press animation
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      })
    ]).start();

    try {
      await addDoc(tasksCollection, {
        text: task,
        done: false,
        priority: priority,
        createdAt: serverTimestamp(),
      });

      // Success animation
      Animated.parallel([
        Animated.timing(successAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: -10,
          duration: 200,
          useNativeDriver: true,
        })
      ]).start(() => {
        setTimeout(() => {
          Animated.parallel([
            Animated.timing(successAnim, {
              toValue: 0,
              duration: 200,
              useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
              toValue: 0,
              duration: 200,
              useNativeDriver: true,
            })
          ]).start();
        }, 1000);
      });

      setTask("");
      setPriority("high");

      // Fade animation for the entire container
      fadeAnim.setValue(0);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

    } catch (error) {
      console.error("Error adding task:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getPriorityStyle = () => {
    switch (priority) {
      case 'high': return styles.priorityHigh;
      case 'medium': return styles.priorityMedium;
      case 'low': return styles.priorityLow;
      default: return {};
    }
  };

  return (
    <Animated.View 
      style={[
        styles.container, 
        getPriorityStyle(),
        { 
          opacity: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0.8, 1],
          }),
          transform: [{ 
            translateY: slideAnim 
          }]
        }
      ]}
    >
      <Text style={styles.priorityLabel}>Priority Level</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={priority}
          onValueChange={(value) => setPriority(value)}
          style={styles.picker}
        >
          <Picker.Item label="🔴 High Priority" value="high" style={styles.pickerItem} />
          <Picker.Item label="🟡 Medium Priority" value="medium" style={styles.pickerItem} />
          <Picker.Item label="🟢 Low Priority" value="low" style={styles.pickerItem} />
        </Picker>
      </View>

      <View style={[
        styles.inputContainer,
        isInputFocused && styles.textInputFocused
      ]}>
        <TextInput
          style={styles.textInput}
          placeholder="Add a new task..."
          placeholderTextColor="#6c757d"
          value={task}
          onChangeText={setTask}
          onSubmitEditing={addTask}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          returnKeyType="done"
          multiline={false}
        />
        
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <TouchableOpacity 
            style={[
              styles.addButton,
              isButtonPressed && styles.addButtonPressed,
              isLoading && styles.loadingButton
            ]} 
            onPress={addTask}
            onPressIn={() => setIsButtonPressed(true)}
            onPressOut={() => setIsButtonPressed(false)}
            disabled={isLoading}
            activeOpacity={0.8}
          >
            <Text style={[
              styles.addButtonText,
              isLoading && styles.loadingText
            ]}>
              {isLoading ? "..." : "+"}
            </Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Success feedback */}
        <Animated.View 
          style={[
            styles.successFeedback,
            {
              opacity: successAnim,
              transform: [{ 
                scale: successAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.5, 1],
                })
              }]
            }
          ]}
        >
          <Text style={styles.successText}>✓</Text>
        </Animated.View>
      </View>
    </Animated.View>
  );
};

export default TaskInput;