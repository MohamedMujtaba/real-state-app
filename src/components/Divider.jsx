import { View, Text } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";

const Divider = ({ color = "#f1f5f9", px = "1", py = "2" }) => {
  const { colorScheme } = useColorScheme();
  return (
    <View className={`w-full px-${px} py-${py}`}>
      <View
        style={{
          backgroundColor: colorScheme === "dark" ? "#1E293B" : color,
        }}
        className="w-full h-[0.5] bg-gray-100 dark:bg-item-dark"
      />
    </View>
  );
};

export default Divider;
