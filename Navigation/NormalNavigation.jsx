import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useColorScheme } from "nativewind"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import DetailsNavigation from "../src/Details/Navigation/DetailsNavigation"
import { i18n } from "../src/utils/localizations"
import BottomNavigation from "./BottomNavigation"

const Stack = createNativeStackNavigator()
const NormalNavigation = () => {
  const { isDark } = useSelector((state) => state.colorMode)
  const { setColorScheme, colorScheme } = useColorScheme()
  const { language } = useSelector((state) => state.lang)
  // i18n.enableFallback = true;
  // i18n.locale = "en";
  // useEffect(() => {
  //   console.log(language);
  // }, [language]);
  useEffect(() => {
    if (isDark) {
      setColorScheme("dark")
    }
    if (!isDark) {
      setColorScheme("light")
    }
  }, [isDark])
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTab" component={BottomNavigation} />
      <Stack.Screen
        name="Details"
        component={DetailsNavigation}
        // options={{
        //   presentation: "modal",
        //   animation: "slide_from_bottom",
        //   animationDuration: 100,
        // }}
      />
    </Stack.Navigator>
  )
}

export default NormalNavigation
