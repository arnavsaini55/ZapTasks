import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { View, Text, Animated } from "react-native";
import style from "./style";

const Header = ({ title, type, color }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Fade animation

  // Decide which text style to use based on type
  const StyleToApply = () => {
    switch (type) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
      default:
        return style.title1;
    }
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,        // Fade in to fully visible
      duration: 800,     // 0.8 seconds
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        backgroundColor: "#D8B4FE", // Light purple background
        paddingVertical: 20,
        paddingHorizontal: 25,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // Android shadow
      }}
    >
      <Text style={[StyleToApply(), { color }]}>
        {title}
      </Text>
    </Animated.View>
  );
};

Header.defaultProps = {
  title: "",
  type: 1,
  color: "#4B0082", // Default dark purple
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.number,
  color: PropTypes.string,
};

export default Header;
