import { StyleSheet, Animated } from "react-native";

const style = StyleSheet.create({
  Welcome: {
    backgroundColor: "#D8B4FE", // Light purple
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000", // Optional shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
});

export default style;
