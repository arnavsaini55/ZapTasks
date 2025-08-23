import React, { useState, useRef } from "react";
import {
  TextInput,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Input from "../Input/Input"; // your task item component
import styles from "../../components/TaskInput/style";

const TaskInput = () => {
  const [task, setTask] = useState("");       // current input
  const [tasks, setTasks] = useState([]);     // list of tasks
  const [priority, setPriority] = useState("high"); // default priority (lowercase!)
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Add a new task
  const addTask = () => {
    if (task.trim() === "") return;

  console.log(Date.now());

    const newTask = {
      id: Date.now(),
      text: task,
      done: false,
      priority: priority,
    };

    setTasks([...tasks, newTask]);
    setTask("");        // clear input
    setPriority(""); // reset priority

    // Animate the new task
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // Toggle done/undone
  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  // Render each task
  const renderTask = ({ item }) => (
    <Animated.View style={{ opacity: fadeAnim }}>
      <Input
        title={item.text}
        checklist={item.done}
        priority={item.priority}
        onToggle={() => toggleTask(item.id)}
      />
    </Animated.View>
  );

  return (
    <View style={styles.container}>

      {/* Priority Picker */}
      <Picker
        selectedValue={priority}
        onValueChange={(value) => setPriority(value)}
        style={{ marginBottom: 10 }}
      >
        <Picker.Item label="Default" value="Default" />
        <Picker.Item label="High" value="high" />
        <Picker.Item label="Medium" value="medium" />
        <Picker.Item label="Low" value="low" />
      </Picker>

      {/* Task Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add a new task..."
          value={task}
          onChangeText={setTask}
          onSubmitEditing={addTask} // press enter to add
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTask}
      />

    </View>
  );
};

export default TaskInput;
