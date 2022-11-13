import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Animated, { FadeInRight } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

const ColorSchemaToggle = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <TouchableOpacity
      className="bg-gray-50 dark:bg-item-dark w-[50] h-[50] rounded-full mt-4 mr-4 items-center justify-center "
      onPress={toggleColorScheme}
    >
      {colorScheme === "dark" ? (
        <Animated.View entering={FadeInRight}>
          <Ionicons name="ios-sunny-outline" size={24} color="black" />
        </Animated.View>
      ) : (
        <Animated.View>
          <Ionicons name="moon-outline" size={24} color="black" />
        </Animated.View>
      )}
    </TouchableOpacity>
  );
};

export default ColorSchemaToggle;
