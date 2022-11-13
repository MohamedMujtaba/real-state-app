import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native"
import { Text, TextInput } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { I18nManager } from "react-native"
import { Provider, useSelector } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import { store, persistor } from "./Redux/store"
import SwitchNavigation from "./Navigation/SwitchNavigation"
import { useColorScheme } from "nativewind"

I18nManager.forceRTL(false)
I18nManager.allowRTL(false)
Text.defaultProps = Text.defaultProps || {}
Text.defaultProps.allowFontScaling = false
TextInput.defaultProps = TextInput.defaultProps || {}
TextInput.defaultProps.allowFontScaling = false
// i18n.locale = "ar";

export default function App() {
  const { colorScheme } = useColorScheme()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer
            theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <SwitchNavigation />
            {/* <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="BottomTab" component={BottomNavigation} />
            <Stack.Screen
              name="Details"
              component={DetailsNavigation}
              options={{
                presentation: "modal",
                animation: "slide_from_bottom",
                animationDuration: 100,
              }}
            />
          </Stack.Navigator> */}
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}

// const BottomStack = createBottomTabNavigator();

// const BottomNavigation = () => {
//   return (
//     <BottomStack.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarHideOnKeyboard: true,
//       }}
//     >
//       <BottomStack.Screen name="homeStack" component={HomeNavigation} />
//       <BottomStack.Screen name="exploreStack" component={ExploreNavigation} />
//       <BottomStack.Screen name="saveStack" component={SaveNavigation} />
//       <BottomStack.Screen name="profileStack" component={ProfileNavigation} />
//     </BottomStack.Navigator>
//   );
// };
