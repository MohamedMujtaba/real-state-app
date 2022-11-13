import { createNativeStackNavigator } from "@react-navigation/native-stack"
import BalanceScreen from "../Screens/BalanceScreen"
import ProfileScreen from "../Screens/ProfileScreen"
import SettingsScreen from "../Screens/SettingsScreen"

const ProfileStack = createNativeStackNavigator()

const ProfileNavigation = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen name="profileScreen" component={ProfileScreen} />
      <ProfileStack.Screen name="settingsScreen" component={SettingsScreen} />
      <ProfileStack.Screen name="balanceScreen" component={BalanceScreen} />
    </ProfileStack.Navigator>
  )
}

export default ProfileNavigation
