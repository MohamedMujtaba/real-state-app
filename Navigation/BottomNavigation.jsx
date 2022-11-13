import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { useColorScheme } from "nativewind";

//

import HomeNavigation from "../src/Home/Navigation/HomeNavigation";
import ExploreNavigation from "../src/Explore/Navigation/ExploreNavigation";
import SaveNavigation from "../src/Save/Navigation/SaveNavigation";
import ProfileNavigation from "../src/Profile/Navigation/ProfileNavigation";
import { StyleSheet, View } from "react-native";

const BottomStack = createBottomTabNavigator();
const BottomNavigation = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <BottomStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        // tabBarStyle: { position: "absolute" },
        tabBarStyle: {
          borderTopWidth: 0,
          paddingBottom: 10,
          height: 60,
        },
        tabBarBackground: () => (
          <View
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: colorScheme === "dark" ? "#131926" : "#fff",
              },
            ]}
          />
        ),
      }}
    >
      <BottomStack.Screen name="homeStack" component={HomeNavigation} />
      <BottomStack.Screen name="exploreStack" component={ExploreNavigation} />
      <BottomStack.Screen name="saveStack" component={SaveNavigation} />
      <BottomStack.Screen name="profileStack" component={ProfileNavigation} />
    </BottomStack.Navigator>
  );
};

export default BottomNavigation;
