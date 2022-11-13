import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { NumberFormat } from "../../utils/helpers"
import { BlurView } from "expo-blur"
import { i18n } from "../../utils/localizations"
import { useSelector } from "react-redux"
import { useColorScheme } from "nativewind"

const { width, height } = Dimensions.get("window")
const BalanceScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-brand-dark">
      <BalanceSection />
      <ScrollView className="p-4">
        <Text className="text-2xl dark:text-white font-semibold text-left mb-2">
          {i18n.t("activity")}
        </Text>
        <Line status="withdrawn" title="24/10/2010" />
        <Line status="added" title="24/10/2010" />
        <Line status="withdrawn" title="24/10/2010" />
        <Line status="added" title="24/10/2010" />
        <Line status="withdrawn" title="24/10/2010" />
        <Line status="added" title="24/10/2010" />
        <Line status="withdrawn" title="24/10/2010" />
        <Line status="added" title="24/10/2010" />
      </ScrollView>
    </SafeAreaView>
  )
}

// TODO: need more thinking
export default BalanceScreen
const Line = ({ status, title, amount = 300000 }) => {
  const f = () => {
    if (status === "withdrawn") {
      return [
        // #ef4444
        "#fef9c3",
        i18n.t("withdrawnFromYourAccount"),
        "#fef08a",
        <Ionicons name="remove-circle-sharp" size={30} color="#fef08a" />,
      ]
    }
    if (status === "added") {
      return [
        "#bbf7d0",
        i18n.t("addedToYourAccount"),
        "#4ade80",
        <Ionicons name="ios-add-circle-sharp" size={30} color="#4ade80" />,
      ]
    }
  }
  return (
    <View className="w-full flex-row items-center py-4">
      <View
        className="mr-2 items-center justify-center"
        // className="w-[60] h-[60] rounded-full mr-2 items-center justify-center"
        // style={{ backgroundColor: f()[0] }}
      >
        {f()[3]}
      </View>
      <View className="mr-2">
        <Text className="text-lg font-semibold dark:text-white text-left">
          {title}
        </Text>
        <Text className="text-gray-300 dark:text-gray-500">{f()[1]}</Text>
      </View>
      <View className="item-center flex-1">
        <Text
          className="text-right text-lg font-bold"
          style={{ color: f()[2] }}
        >
          {NumberFormat(amount)}
        </Text>
      </View>
    </View>
  )
}
const BalanceSection = () => {
  const { language } = useSelector((state) => state.lang)
  const { colorScheme } = useColorScheme()
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
  )
}
