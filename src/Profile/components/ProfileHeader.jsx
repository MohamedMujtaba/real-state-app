import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import { Text, TouchableOpacity, View } from "react-native";
import { i18n } from "../../utils/localizations";

const ProfileHeader = () => {
  const { colorScheme } = useColorScheme();
  const navigation = useNavigation();

  return (
    <View className=" flex-row px-4 py-3 items-center justify-between">
      <TouchableOpacity className="w-[45] h-[45] bg-slate-400 dark:bg-item-dark rounded-full items-center justify-center">
        <Ionicons
          name="notifications-outline"
          size={23}
          color={colorScheme === "dark" ? "#c4c4c4" : "#000"}
        />
      </TouchableOpacity>
      <Text className="text-lg font-semibold dark:text-white">
        {i18n.t("profile")}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("settingsScreen")}
        className="w-[45] h-[45] bg-slate-400 dark:bg-item-dark rounded-full items-center justify-center"
      >
        <Ionicons
          name="ios-settings-sharp"
          size={22}
          color={colorScheme === "dark" ? "#c4c4c4" : "#000"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;
