import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LocationIcon from "../utils/Icons/LocationIcon";
import { i18n } from "../utils/localizations";
import InfoTag from "./InfoTag";

const ItemLarge = ({ mr, height, width }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      className="bg-item-light dark:bg-item-dark rounded-2xl items-center justify-evenly  px-[11] py-[13]  "
      onPress={() => navigation.navigate("Details")}
      style={{
        marginRight: mr || null,
        height: height || 329.04,
        width: width || 320,
      }}
    >
      <View className="absolute bottom-4 right-4">
        <AntDesign name="hearto" size={24} color="black" />
      </View>
      <View className="h-[169] w-[100%] bg-white rounded-2xl ">
        {/* <ImageBackground
          source={require("../../assets/img/Rectangle-1.png")}
          className="h-[100%] w-[100%] rounded-2xl overflow-hidden relative"
          resizeMode="cover"
        > */}
        {/* Type */}
        <BlurView
          intensity={150}
          className="absolute top-2 left-3 px-2 py-1 rounded-md"
        >
          <Text className="font-semibold text-[13] text-[#2972FF]">
            {i18n.t("house")}
          </Text>
        </BlurView>
        {/* </ImageBackground> */}
      </View>
      <View className="w-[95%] flex-1 items-start justify-evenly mt-[13]">
        {/* title */}
        {/* <View>
          <Text className="font-semibold text-lg text-[#1E293B]">
            Primary Apartment
          </Text>
        </View> */}
        <View className="flex-row  w-full">
          {[1, 2, 3].map(({ item, index }) => (
            <InfoTag {...item} iconSize={22} key={Math.random()} />
          ))}
          {/* <FlatList
            data={[1, 2, 3]}
            className="bg-green-400 w-full"
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <InfoTag {...item} />}
          /> */}
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
export default ItemLarge;
