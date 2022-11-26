import { Ionicons } from "@expo/vector-icons";
import {
  Dimensions,
  ImageBackground,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { NumberFormat } from "../../utils/helpers";
import { i18n } from "../../utils/localizations";
const { width, height } = Dimensions.get("window");

const BalanceSection = () => {
  const { language } = useSelector((state) => state.lang);
  const { colorScheme } = useColorScheme();
  return (
    <ImageBackground
      source={require("../../../assets/img/pattern.png")}
      style={{ height: height * 0.4 }}
      className="w-full items-center justify-center"
    >
      <View className="w-full items-center justify-center px-4">
        <View className="flex-col items-start h-[150] justify-center px-4 w-full bg-white dark:bg-item-dark rounded-t-md ">
          <TouchableOpacity className="absolute top-2 right-2">
            <Ionicons
              name="ios-information-circle-outline"
              size={20}
              color="#ef4444"
            />
          </TouchableOpacity>
          <View className="flex-row items-baseline mt-3">
            <View className="mr-2">
              <Ionicons name="wallet-outline" size={50} color="#2972ff" />
            </View>
            <Text className="text-4xl dark:text-gray-50">
              {NumberFormat(25000)}
            </Text>
            <Text className="font-bold ml-2 text-gray-400 text-base">
              {i18n.t("pound")}
            </Text>
          </View>
          <Text className="text-gray-300 dark:text-gray-500 font-semibold mt-1 ">
            {i18n.t("termsAndConditionsApply")}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          className="w-full p-4 rounded-b-md bg-brand items-center justify-center flex-row"
        >
          {language === "en" && (
            <View className="mr-2">
              <Ionicons
                name="ios-add"
                size={30}
                color={colorScheme === "dark" ? "#fff" : "#000"}
              />
            </View>
          )}
          <Text className="text-lg font-semibold dark:text-white">
            {i18n.t("addBalance")}
          </Text>
          {language === "ar" && (
            <View className="ml-2">
              <Ionicons
                name="ios-add"
                size={30}
                color={colorScheme === "dark" ? "#fff" : "#000"}
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default BalanceSection;
