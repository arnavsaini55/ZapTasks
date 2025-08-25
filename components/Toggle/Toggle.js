import React from "react";
import { TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Toggle = ({ isDarkMode, onToggle }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <TouchableOpacity onPress={onToggle}>
        <FontAwesomeIcon
          icon={isDarkMode ? faSun : faMoon} // sun in dark mode, moon in light mode
          size={28}
          color={isDarkMode ? "#FFD700" : "#4B0082"} // gold for sun, dark purple for moon
        />
      </TouchableOpacity>
    </View>
  );
};

export default Toggle;
