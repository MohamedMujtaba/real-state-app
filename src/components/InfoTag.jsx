import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

const InfoTag = ({
  iconSize = 24,
  m = 2,
  bgLight = "gray-100",
  bgDark = "item-dark",
}) => {
  const { colorScheme } = useColorScheme();

  return (
    <View
      className={`flex-row items-center bg-${bgLight} dark:bg-${bgDark} px-1 mr-${m} rounded-sm `}
    >
      <Ionicons
        name="ios-bed-outline"
        size={iconSize}
        color={colorScheme === "dark" ? "#fff" : "#000"}
      />
      <Text className={`ml-${m} dark:text-white`}>22</Text>
    </View>
  );
};

export default InfoTag;
