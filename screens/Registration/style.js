// import { StyleSheet } from "react-native";


// const style = StyleSheet.create({
//     Basic:{
//         flex:1,
//         alignItems:'center',
//         justifyContent:'center'
        
//     }
// })

// export default style;
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    width: "80%",
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#eee",
    marginBottom: 15,
  },
  registerButton: {
    backgroundColor: "#7E57C2",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 10,
  },
  registerButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default style;
