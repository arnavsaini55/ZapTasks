import React, { useState, useRef } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import styles from "../../components/TaskInput/style";

const TaskInput = () => {
  const [task, setTask] = useState("");       
  const [priority, setPriority] = useState("high");
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const tasksCollection = collection(db, "tasks");

  const addTask = async () => {
    if (task.trim() === "") return;

    await addDoc(tasksCollection, {
      text: task,
      done: false,
      priority: priority,
      createdAt: serverTimestamp(),
    });

    setTask("");        
    setPriority("high"); 

    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={priority}
        onValueChange={(value) => setPriority(value)}
        style={{ marginBottom: 10 }}
      >
        <Picker.Item label="High" value="high" />
        <Picker.Item label="Medium" value="medium" />
        <Picker.Item label="Low" value="low" />
      </Picker>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add a new task..."
          value={task}
          onChangeText={setTask}
          onSubmitEditing={addTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskInput;
