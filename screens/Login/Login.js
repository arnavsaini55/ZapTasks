// import React, { useState } from "react";      
// import { View, Text, TouchableOpacity } from "react-native"; 
// import style from "./Style"; 
// import { useNavigation } from "@react-navigation/native";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
// import { Routes } from "../../navigation/Routes";

// const Login = () => {
//   const navigation = useNavigation();
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => setIsDarkMode(!isDarkMode);

//   return (
//     <View style={[style.container, { backgroundColor: isDarkMode ? "#000" : "#fff" }]}>
//       {/* Top-right buttons container */}
//       <View style={style.topRightContainer}>
//         {/* Dark mode toggle */}
//         <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 10 }}>
//           <FontAwesomeIcon
//             icon={isDarkMode ? faSun : faMoon}
//             size={24}
//             color={isDarkMode ? "#FFD700" : "#4B0082"}
//           />
//         </TouchableOpacity>

//         {/* Sign Up button */}
//         <TouchableOpacity
//           style={style.topRightButton}
//           onPress={() => navigation.navigate("Registration")}
//         >
//           <Text style={style.topRightButtonText}>Sign Up</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Centered login text */}
//       <View style={style.loginTextContainer}>
//         <Text style={[style.loginText, { color: isDarkMode ? "#fff" : "#000" }]}>
//           Welcome to the Login Screen!
//         </Text>
//       </View>
//     </View>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import style from "./Style";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("Home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View style={[style.container, { backgroundColor: isDarkMode ? "#000" : "#fff" }]}>
      
      {/* Top-right Dark Mode toggle */}
      <View style={style.topRightToggle}>
        <TouchableOpacity onPress={toggleTheme}>
          <FontAwesomeIcon
            icon={isDarkMode ? faSun : faMoon}
            size={28}
            color={isDarkMode ? "#FFD700" : "#4B0082"}
          />
        </TouchableOpacity>
      </View>

      {/* Welcome Text */}
      <View style={style.centerContainer}>
        <Text style={[style.welcomeText, { color: isDarkMode ? "#fff" : "#000" }]}>
          Welcome Back!
        </Text>

        {/* TextInputs */}
        <TextInput
          placeholder="Email"
          placeholderTextColor={isDarkMode ? "#aaa" : "#555"}
          value={email}
          onChangeText={setEmail}
          style={[style.input, { backgroundColor: isDarkMode ? "#222" : "#eee", color: isDarkMode ? "#fff" : "#000" }]}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={isDarkMode ? "#aaa" : "#555"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={[style.input, { backgroundColor: isDarkMode ? "#222" : "#eee", color: isDarkMode ? "#fff" : "#000" }]}
        />

        {error ? <Text style={style.errorText}>{error}</Text> : null}

        <TouchableOpacity style={style.loginButton} onPress={handleLogin}>
          <Text style={style.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up Button at bottom */}
      <View style={style.bottomButtonContainer}>
        <TouchableOpacity
          style={style.bottomButton}
          onPress={() => navigation.navigate("Registration")}
        >
          <Text style={style.bottomButtonText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
