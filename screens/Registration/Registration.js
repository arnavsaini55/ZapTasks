// import React from "react";      
// import { View, Text, TouchableOpacity } from "react-native"; 
// import style from "./style"; 

// const Registration = () => {
//   return (
//     <View style={style.Basic}>
//       <Text>
//         Welcome to the Registration Screen!
//       </Text>
//     </View>
//   );
// };

// export default Registration;
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import style from "./style";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

const Registration = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User Registered!");
      navigation.navigate("Login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View style={style.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={style.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={style.input}
      />
      {error ? <Text style={style.errorText}>{error}</Text> : null}
      <TouchableOpacity style={style.registerButton} onPress={handleRegister}>
        <Text style={style.registerButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Registration;
