import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import Home from "../screens/Home/home";
import ArtificialIntelligence from "../screens/ArtificialIntelligence/ArtificialIntelligence";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.ArtificialIntelligence} component={ArtificialIntelligence} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
