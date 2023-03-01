import { View, Text, Dimensions, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const data = [
  require("../../assets/img/Rectangle.png"),
  require("../../assets/img/Rectangle-1.png"),
  require("../../assets/img/Rectangle-2.png"),
  require("../../assets/img/Rectangle-3.png"),
];
const ImageModel = () => {
  const { width, height } = Dimensions.get("window");

  return (
    <View
      style={{
        width,
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.7)",
      }}
      className="absolute z-[9999] items-center justify-center"
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((i, index) => {
          return <Image source={i} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default ImageModel;
