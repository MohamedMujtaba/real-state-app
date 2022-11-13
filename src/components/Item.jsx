import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  AntDesign,
  FontAwesome,
  Foundation,
  Ionicons,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";

const Item = ({ title, city, address, owner, details, images, price }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details")}
      className="w-full h-48 flex-row  items-center justify-between  "
    >
      <View className="rounded-lg w-[50%] resize">
        {/* <Image
          source={images[0]}
          className="rounded-lg w-[100%] h-[90%] "
          resizeMode="contain"
        /> */}
        <TouchableOpacity className="absolute top-0 right-0">
          <BlurView
            intensity={200}
            className=" h-[35] w-[35] rounded-lg items-center justify-center  "
          >
            <AntDesign name="hearto" size={18} color="black" />
          </BlurView>
        </TouchableOpacity>
        <BlurView
          intensity={200}
          className="flex-row items-center justify-center absolute top-0 rounded-tl-lg rounded-br-lg px-4 py-1"
        >
          <Text className=" pl-2 text-base text-slate-900 max-w-full">
            {price}k
          </Text>
        </BlurView>
        <BlurView
          intensity={200}
          className="w-full flex-row items-center justify-center absolute bottom-0 rounded-br-lg px-4 py-1"
        >
          <View className="flex-row items-center mr-4">
            <Text className="text-slate-900 text-base mr-1">2</Text>
            <Ionicons name="ios-bed-outline" size={24} color="#0f172a" />
          </View>
          <View className="flex-row items-center">
            <Text className="text-slate-900 text-base mr-1">2</Text>
            <FontAwesome name="bath" size={18} color="#0f172a" />
          </View>
        </BlurView>
      </View>
      <View className="flex-col h-[90%] w-[50%] pl-2  justify-evenly">
        <Text className="font-bold text-base text-left">{title}</Text>

        <View className="flex-row items-center ">
          <Ionicons name="ios-location-sharp" size={17} color="#0f172a" />
          <Text className="pl-2 text-gray-500">{address}</Text>
        </View>
        <View className="flex-row items-center ">
          <SimpleLineIcons name="size-fullscreen" size={17} color="#0f172a" />
          <Text className="pl-2 text-gray-500">238 Sq.M</Text>
        </View>
        <View className="flex-row items-center ">
          <AntDesign name="user" size={17} color="#0f172a" />
          <Text className="pl-2 text-gray-500 text-xs">
            Mohamed Al-Mujaba hassan
          </Text>
        </View>
        <View className="absolute bottom-1 right-2">
          <Octicons name="verified" size={13} color="#22c55e" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
