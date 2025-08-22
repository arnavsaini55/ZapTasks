import { StyleSheet } from "react-native";

const style = StyleSheet.create({
 container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
  },
  title: {
    flex: 1,
    fontSize: 16,
  },
  done: {
    textDecorationLine: "line-through",
    color: "gray",
  },
})


export default style;