import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from "react-native"
import React from "react"
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context"
import { useColorScheme } from "nativewind"
import Tabs from "../../components/Tabs"
import { useNavigation } from "@react-navigation/native"
import { i18n } from "../../utils/localizations"
import ItemSmall from "../../components/ItemSmall"
import Animated, { FadeIn, FadeOut } from "react-native-reanimated"

const { width, height } = Dimensions.get("window")
const ProfileScreen = () => {
  const { colorScheme } = useColorScheme()
  const titles = [i18n.t("ready"), i18n.t("reviewing")]
  return (
    <SafeAreaView className="flex-1 dark:bg-brand-dark ">
      <ScrollView>
        {/* header */}
        <Header />
        <ImgSection />
        <Tabs
          titles={titles}
          titleWidth="45%"
          screens={[<Ready />, <Reviewing />]}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const Ready = () => {
  return (
    <Animated.View
      className="w-full"
      entering={FadeIn.delay(20)}
      exiting={FadeOut}
    >
      <ItemSmall width="100%" />
      <ItemSmall width="100%" />
      <ItemSmall width="100%" />
    </Animated.View>
  )
}

const Reviewing = () => {
  return (
    <Animated.View
      className="w-full"
      entering={FadeIn.delay(20)}
      exiting={FadeOut}
    >
      <ItemSmall width="100%" />
    </Animated.View>
  )
}

export default ProfileScreen

const Header = () => {
  const { colorScheme } = useColorScheme()
  const navigation = useNavigation()

  return (
    <View className=" flex-row px-4 py-3 items-center justify-between">
      <TouchableOpacity className="w-[45] h-[45] bg-slate-400 dark:bg-item-dark rounded-full items-center justify-center">
        <Ionicons
          name="notifications-outline"
          size={23}
          color={colorScheme === "dark" ? "#c4c4c4" : "#000"}
        />
      </TouchableOpacity>
      <Text className="text-lg font-semibold dark:text-white">
        {i18n.t("profile")}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("settingsScreen")}
        className="w-[45] h-[45] bg-slate-400 dark:bg-item-dark rounded-full items-center justify-center"
      >
        <Ionicons
          name="ios-settings-sharp"
          size={22}
          color={colorScheme === "dark" ? "#c4c4c4" : "#000"}
        />
      </TouchableOpacity>
    </View>
  )
}

const ImgSection = () => {
  const { colorScheme } = useColorScheme()

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
    </View>
  )
}
