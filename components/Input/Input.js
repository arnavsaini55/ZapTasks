// import React from "react";
import { View, Text, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck, faFlag, faSquare } from "@fortawesome/free-solid-svg-icons";

import style from "./style";

const Input = ({ title, checklist, priority, onToggle }) => {
  const getPriorityColor = () => {
    switch (priority) {
      case "high": return "red";
      case "medium": return "orange";
      case "low": return "green";
      default: return "grey";
    }
  };

  return (
    <View style={style.container}>
      <FontAwesomeIcon icon={faFlag} size={20} color={getPriorityColor()} />
      <Text style={[style.title, checklist && style.done]}>{title}</Text>
      <Pressable onPress={onToggle}>
        <FontAwesomeIcon icon={checklist ? faCheck : faSquare} size={20} />
      </Pressable>
    </View>
  );
};

export default Input;
