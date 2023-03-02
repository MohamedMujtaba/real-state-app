import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { Text, TextInput, I18nManager } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./Redux/store";
import SwitchNavigation from "./Navigation/SwitchNavigation";
import { useColorScheme } from "nativewind";
import { i18n } from "./src/utils/localizations";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;
// i18n.locale = "ar";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatfullApp />
      </PersistGate>
    </Provider>
  );
}

const StatfullApp = () => {
  const { colorScheme } = useColorScheme();
  const { language } = useSelector((state) => state.lang);
  i18n.enableFallback = true;
  useEffect(() => {
    i18n.locale = language;
  }, [language]);
  return (
    <SafeAreaProvider>
      <StatusBar
        // translucent
        style={colorScheme === "dark" ? "light" : "dark"}
      />
      <NavigationContainer
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <SwitchNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
