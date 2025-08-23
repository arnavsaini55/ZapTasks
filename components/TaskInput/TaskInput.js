import React, { useState } from "react";
import { TextInput, View, Text, FlatList, TouchableOpacity } from "react-native";
import Input from "../Input/Input"
import styles from "../../components/TaskInput/style";

const TaskInput = () => {
  const [task, setTask] = useState("");   // current input
  const [tasks, setTasks] = useState([]); // list of tasks
  const[Priority,setPriority] = useState("low");

  const addTask = () => {
    if (task.trim().length === 0) return;

    const newTask = {
      id: Date.now(),
      text: task,
      done:false,
      Priority: Priority,
    };

    setTasks([...tasks, newTask]); // add new task
    setTask("");                   // clear input
  };

  const toggleTask = (id) => {
  setTasks(
    tasks.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    )//main
  );
};

const renderTask = ({ item }) => (
    <Input
      title={item.text}
      checklist={item.done}
      priority={item.priority}
      onToggle={() => toggleTask(item.id)}
    />
  );

  return (
    <View style={styles.container}>
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

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTask}
      />
    </View>
  );
};

export default TaskInput;