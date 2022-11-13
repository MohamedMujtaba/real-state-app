import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../Screens/DetailsScreen";

const DetailsStack = createNativeStackNavigator();

const DetailsNavigation = () => {
  return (
    <DetailsStack.Navigator screenOptions={{ headerShown: false }}>
      <DetailsStack.Screen name="DetailsScreen" component={DetailsScreen} />
    </DetailsStack.Navigator>
  );
};

export default DetailsNavigation;
