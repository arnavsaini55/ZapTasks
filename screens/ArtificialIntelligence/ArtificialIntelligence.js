import React from "react";
import { View, Text, Pressable } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ArtificialIntelligence = () => {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to the Artificial Intelligence Screen!</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#7E57C2",
          padding: 12,
          borderRadius: 8,
          alignItems: "center",
          marginTop: 20,
        }}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>TaskList</Text>
      </TouchableOpacity>   

     
    </View>
    
  );
};

export default ArtificialIntelligence;