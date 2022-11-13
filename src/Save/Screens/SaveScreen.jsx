import { View, Text, ScrollView } from "react-native";
import React from "react";
import ItemLarge from "../../components/ItemLarge";
import ItemMedium from "../../components/ItemMedium";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemSmall from "../../components/ItemSmall";
import Header from "../../components/Header";
import { StatusBar } from "expo-status-bar";
import SimpleSearchComponent from "../../components/SimpleSearchComponent";

const SaveScreen = () => {
  return (
    <SafeAreaView className="flex-1 dark:bg-brand-dark">
      {/* <StatusBar translucent={true} /> */}
      <SimpleSearchComponent />
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        <ItemSmall />
        <ItemSmall />
        <ItemSmall />
        <ItemSmall />
        <ItemSmall />
        <ItemSmall />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SaveScreen;
