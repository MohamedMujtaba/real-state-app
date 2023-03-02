import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

const SubmitButton = ({ title, onPress, isLoading }) => {
  return (
    <View className="w-full h-16 ">
      <TouchableOpacity
        onPress={onPress}
        disabled={isLoading}
        className="w-full h-full rounded-md bg-brand items-center justify-center"
        activeOpacity={0.9}
        style={{
          backgroundColor: isLoading ? "#f3f3f3" : "#2972ff",
        }}
      >
        {isLoading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <Text className="text-lg font-semibold text-white">{title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default SubmitButton;
