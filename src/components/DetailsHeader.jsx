import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const DetailsHeader = () => {
  const navigation = useNavigation();
  return (
    <BlurView
      intensity={20}
      tint="dark"
      className="w-full px-4 pb-2 absolute z-10 flex-row items-center justify-between"
    >
      <SafeAreaView className="w-full flex-row items-center justify-between">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="rounded-md w-[45] h-[45] items-center justify-center"
          style={{
            borderColor: "#fff",
            borderWidth: StyleSheet.hairlineWidth,
          }}
        >
          <Ionicons name="ios-arrow-back-sharp" size={22} color="#fff" />
        </TouchableOpacity>
        {/* <BlurView intensity={200} className="p-2 rounded-md flex-row">
          <Text className="font-semibold text-lg">1,199</Text>
          <Text className="font-semibold text-lg text-gray-500">/month</Text>
        </BlurView> */}
        <TouchableOpacity
          className="rounded-md w-[45] h-[45] items-center justify-center"
          style={{
            borderColor: "#fff",
            borderWidth: StyleSheet.hairlineWidth,
          }}
        >
          <Ionicons name="ios-heart-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>
    </BlurView>
  );
};

export default DetailsHeader;
