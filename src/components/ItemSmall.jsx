import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { i18n } from "../utils/localizations";
import InfoTag from "./InfoTag";

const ItemSmall = ({ mb = 20, height = "166", width = "90%" }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      // h-[166] w-[90%] max-w-[382]
      // px-[11] py-[13]
      className="bg-white dark:bg-item-dark rounded-2xl flex-row items-center justify-between  "
      style={{
        marginBottom: mb,
        // height: height,
        height: 150,
        width: width,
      }}
    >
      <View className="absolute bottom-4 right-4">
        <AntDesign name="heart" size={20} color="#ef4444" />
      </View>
      <View className="h-[100%] w-[40%] bg-white rounded-tl-2xl rounded-bl-2xl overflow-hidden ">
        {/* <ImageBackground
          source={require("../../assets/img/Rectangle-1.png")}
          className="h-[100%] w-[100%] "
          resizeMode="cover"
        ></ImageBackground> */}
      </View>
      <View className="h-[95%] w-[40%] flex-1 items-start justify-evenly ml-2">
        {/* Type */}
        <View intensity={150} className="">
          <Text className="font-semibold text-[13] text-[#2972FF]">
            {i18n.t("apartment")}
          </Text>
        </View>
        {/* title */}
        <View className="flex-row z-10">
          <FlatList
            data={[1, 2, 3]}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <InfoTag {...item} iconSize={20} m={1} />}
          />
        </View>
        {/* location */}
        <View className="flex-row items-center">
          <SimpleLineIcons name="location-pin" size={16} color="black" />
          <Text className="font-semibold text-[13] text-[#707070]">
            Mighty Cinco Family
          </Text>
        </View>
        {/* price */}
        <View className="flex-row items-center">
          <Text className="font-semibold text-xl text-[#2972FF]">$999</Text>
          <Text className="font-semibold text-[13] text-[#707070] ">/</Text>
          <Text className="font-semibold text-[13] text-[#707070] ">
            {i18n.t("month")}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ItemSmall;
