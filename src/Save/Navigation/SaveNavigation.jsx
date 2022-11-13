import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SaveScreen from "../Screens/SaveScreen";

const SaveStack = createNativeStackNavigator();

const SaveNavigation = () => {
  return (
    <SaveStack.Navigator screenOptions={{ headerShown: false }}>
      <SaveStack.Screen name="saveScreen" component={SaveScreen} />
    </SaveStack.Navigator>
  );
};

export default SaveNavigation;
