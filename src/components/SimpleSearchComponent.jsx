import { View, Text, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SettIcon from "../utils/Icons/SettIcon";
import { useColorScheme } from "nativewind";
import { i18n } from "../utils/localizations";

const SimpleSearchComponent = () => {
  const { colorScheme } = useColorScheme();

  return (
    <View className="items-center p-4">
      <View className="w-[100%] h-[56] justify-center  ">
        <View className="absolute left-4 z-10 ">
          <Ionicons name="search" size={24} color="#94a3b8" />
        </View>
        <TextInput
          placeholder={i18n.t("search")}
          placeholderTextColor={colorScheme === "dark" ? "#fff" : "#c4c4c4"}
          className="bg-white dark:bg-item-dark dark:text-white w-[100%] h-[100%] rounded-2xl  border-gray-400 px-12 text-lg"
          style={{
            borderWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View className="absolute right-4 z-10 ">
          <SettIcon />
        </View>
      </View>
    </View>
  );
};

export default SimpleSearchComponent;
