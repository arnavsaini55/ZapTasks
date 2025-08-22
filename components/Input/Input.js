import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Text, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck, faFlag, faSquare } from "@fortawesome/free-solid-svg-icons";
import style from "./style";

const Input = ({ title, checklist, priority }) => {
  const [checked, setChecked] = useState(checklist);

  const getPriorityColor = () => {
    switch (priority) {
      case "high":
        return "red";
      case "medium":
        return "orange";
      case "low":
        return "green";
      default:
        return "grey";
    }
  };

  return (
    <View style={style.container}>
      <FontAwesomeIcon
        icon={faFlag}
        size={20}
        color={getPriorityColor()}
        style={{ marginRight: 10 }}
      />
      <Text style={[style.title, checked && style.done]}>{title}</Text>
      <Pressable onPress={() => setChecked(!checked)}>
        <FontAwesomeIcon
          icon={checked ? faCheck : faSquare}
          size={20}
          color={checked ? "green" : "grey"}
        />
      </Pressable>
    </View>
  );
};

Input.defaultProps = {
  title: "",
  checklist: false,
  priority: "low",
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  checklist: PropTypes.bool,
  priority: PropTypes.oneOf(["low", "medium", "high"]),
};

export default Input;
