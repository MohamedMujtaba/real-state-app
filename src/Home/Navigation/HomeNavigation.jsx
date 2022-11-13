import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";

const HomeStack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="homeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
