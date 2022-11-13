import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LocationIcon from "../utils/Icons/LocationIcon";
import { i18n } from "../utils/localizations";

const UserLocationComponent = () => {
  const { colorScheme } = useColorScheme();
  return (
    <SafeAreaView className="p-4">
      <TouchableOpacity activeOpacity={0.5}>
        <View className="flex-row items-center">
          <Text className="font-semibold text-sm text-[#1E293B] dark:text-gray-100">
            {i18n.t("location")}
          </Text>
          <Ionicons
            name="ios-chevron-down-outline"
            size={22}
            color={colorScheme === "dark" ? "#FFF" : "#000"}
          />
        </View>
        <View className="flex-row items-center">
          <LocationIcon />
          <Text className="text-xl dark:text-white">Khartoum, Sudan</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UserLocationComponent;
