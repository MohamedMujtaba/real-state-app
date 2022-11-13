import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExploreScreen from "../Screens/ExploreScreen";

const ExploreStack = createNativeStackNavigator();

const ExploreNavigation = () => {
  return (
    <ExploreStack.Navigator screenOptions={{ headerShown: false }}>
      <ExploreStack.Screen name="exploreScreen" component={ExploreScreen} />
    </ExploreStack.Navigator>
  );
};

export default ExploreNavigation;
