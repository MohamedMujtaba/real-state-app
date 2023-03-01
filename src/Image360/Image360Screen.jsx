import { View, Text } from "react-native";
import React from "react";
import Image360 from "../components/Image360";
import { StatusBar } from "expo-status-bar";
const Image360Screen = () => {
  return (
    <View className="flex-1">
      <StatusBar hidden />
      <Image360 />
    </View>
  );
};

export default Image360Screen;
