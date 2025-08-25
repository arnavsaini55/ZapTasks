import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";
import { Routes } from "../../navigation/Routes";
import Header from "../../components/Header/Header";
import TaskInput from "../../components/TaskInput/TaskInput";
import TaskList from "../../components/Tasklist/TaskList";

const Home = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header title="Welcome to ZapTasks" type={2} />
      <TaskInput />
      <TaskList />

      <TouchableOpacity
        style={{
          backgroundColor: "#7E57C2",
          padding: 12,
          borderRadius: 8,
          alignItems: "center",
          margin: 20,
        }}
        onPress={() => navigation.navigate(Routes.ArtificialIntelligence)} // ✅ exact route
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Go to AI Page</Text>
      </TouchableOpacity>
    </>
  );
};
export default Home;