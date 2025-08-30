import React, { useEffect, useState, useRef } from "react";
import {
  View,
  FlatList,
  Animated,
} from "react-native";
import { db, auth } from "../../firebase/firebaseConfig"; // ✅ import auth
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";

import Input from "../Input/Input";
import styles from "../../components/TaskInput/style";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const animRefs = useRef({});

  
  const tasksCollection = collection(db, "users", auth.currentUser.uid, "tasks");

  useEffect(() => {
    const q = query(tasksCollection, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const firebaseTasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(firebaseTasks);
    });
    return () => unsubscribe();
  }, []);

  const deleteTask = async (id) => {
    if (!animRefs.current[id]) return;

    Animated.timing(animRefs.current[id], {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(async () => {
      await deleteDoc(doc(db, "users", auth.currentUser.uid, "tasks", id)); // ✅ user-specific delete
    });
  };

  const renderTask = ({ item }) => {
    if (!animRefs.current[item.id]) {
      animRefs.current[item.id] = new Animated.Value(1);
    }

    return (
      <Animated.View style={[styles.taskItem, { opacity: animRefs.current[item.id] }]}>
        <Input
          title={item.text}
          checklist={item.done}
          priority={item.priority}
          onToggle={() => deleteTask(item.id)}
        />
      </Animated.View>
    );
  };

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={renderTask}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default TaskList;



// import React, { useEffect, useState, useRef } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   Animated,
// } from "react-native";
// import { db } from "../../firebase/firebaseConfig";
// import {
//   collection,
//   onSnapshot,
//   query,
//   orderBy,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";

// import Input from "../Input/Input";
// import styles from "../../components/TaskInput/style";

// const TaskList = () => {
//   const [tasks, setTasks] = useState([]);
//   const tasksCollection = collection(db, "tasks");
//   const animRefs = useRef({}); // animation refs for each task

//   // Fetch tasks in real-time
//   useEffect(() => {
//     const q = query(tasksCollection, orderBy("createdAt", "desc"));
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       const firebaseTasks = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setTasks(firebaseTasks);
//     });
//     return () => unsubscribe();
//   }, []);

//   // Delete task with fade animation
//   const deleteTask = async (id) => {
//     if (!animRefs.current[id]) return;

//     Animated.timing(animRefs.current[id], {
//       toValue: 0,
//       duration: 300,
//       useNativeDriver: true,
//     }).start(async () => {
//       await deleteDoc(doc(db, "tasks", id));
//     });
//   };

//   const renderTask = ({ item }) => {
//     if (!animRefs.current[item.id]) {
//       animRefs.current[item.id] = new Animated.Value(1);
//     }

//     return (
//       <Animated.View
//         style={[
//           styles.taskItem,
//           { opacity: animRefs.current[item.id] },
//         ]}
//       >
//         <Input
//           title={item.text}
//           checklist={item.done}
//           priority={item.priority}
//           // ❌ Instead of toggling done, delete task
//           onToggle={() => deleteTask(item.id)}
//         />
//       </Animated.View>
//     );
//   };

//   return (
//     <FlatList
//       data={tasks}
//       keyExtractor={(item) => item.id}
//       renderItem={renderTask}
//       contentContainerStyle={styles.listContainer}
//     />
//   );
// };

// export default TaskList;