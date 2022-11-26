import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

const { width, height } = Dimensions.get("window");

const ProfileImgSection = () => {
  const { colorScheme } = useColorScheme();
  const navigation = useNavigation();
  return (
    <View
      className=" w-full items-center justify-center"
      style={{ height: height * 0.4 }}
    >
      {/* will be an image */}
      <View className="w-[120] h-[120] bg-white  dark:bg-item-dark rounded-full ">
        <Image
          className="w-full h-full rounded-full"
          source={{ uri: "https://xsgames.co/randomusers/avatar.php?g=pixel" }}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          className="bg-white dark:bg-item-dark p-2 rounded-full absolute bottom-0 right-0 z-10"
        >
          <Feather
            name="edit-3"
            size={22}
            color={colorScheme === "dark" ? "#c4c4c4" : "#000"}
          />
        </TouchableOpacity>
      </View>
      {/* Name */}
      <View className="flex-row my-3 items-center justify-center">
        <Text className="text-xl font-semibold dark:text-gray-200 mr-2">
          Mohamed Mujtaba
        </Text>
        <MaterialCommunityIcons
          name="check-decagram-outline"
          size={22}
          color="#84cc16"
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("balanceScreen")}
          className="border-2 mt-1 py-3 px-8 rounded-md flex-row items-center border-white"
          right
        >
          <Feather
            name="dollar-sign"
            size={24}
            color={colorScheme === "dark" ? "#fff" : "#000"}
          />
          <Text className="text-lg font-semibold dark:text-white">
            3,000,000,000
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileImgSection;
