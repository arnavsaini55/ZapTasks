import React from "react";      
import { View, Text, TouchableOpacity } from "react-native"; 
import style from "./Style"; 
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const navigation = useNavigation();
  return (
    <><View style={style.Basic}>
      <Text>Welcome to the Login Screen!</Text>
    </View>
    <TouchableOpacity
        style={{
          backgroundColor: "#7E57C2",
          padding: 12,
          borderRadius: 8,
          alignItems: "center",
          marginTop: 20,
        }}
    onPress={()=>{navigation.navigate("Registration")}} 
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>if u dont have the account</Text>
      </TouchableOpacity>
    </>
    
  );
};

export default Login;