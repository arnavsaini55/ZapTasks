import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import Home from "../screens/Home/home";
import ArtificialIntelligence from "../screens/ArtificialIntelligence/ArtificialIntelligence";
import Login from "../screens/Login/Login";
import Registration from "../screens/Registration/Registration";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.ArtificialIntelligence} component={ArtificialIntelligence} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
