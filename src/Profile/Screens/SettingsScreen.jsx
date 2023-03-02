import { View, Text, TouchableOpacity, Switch, Dimensions } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import Divider from "../../components/Divider";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../../Redux/colorModeSlice";
import { i18n } from "../../utils/localizations";
import LangBottomSheet from "../../components/LangBottomSheet";
import { useRef } from "react";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { logout } from "../../../Redux/authSlice";

const SettingsScreen = () => {
  const bottomSheetRef = useRef(null);
  const { height } = Dimensions.get("window");
  const { language } = useSelector((state) => state.lang);
  const dispatch = useDispatch();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <SafeAreaView
          className="flex-1 bg-white dark:bg-brand-dark"
          style={{ height }}
        >
          <Header />
          <ScrollView className="pl-4 pr-4 pb-6 flex-1">
            <Title title={i18n.t("preferences")} />
            <Line onPress={() => bottomSheetRef.current.snapToIndex(0)}>
              <Text className="text-base font-semibold dark:text-white">
                {i18n.t("language")}
              </Text>
              <View className="flex-row items-center justify-between">
                {/* FIXME: hook with the state */}
                <Text className="text-base mr-1 text-gray-500">
                  {language === "ar" ? "العربية" : "English"}
                </Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="#2972ff"
                />
              </View>
            </Line>
            {/* ApplicationSettings */}
            <Title title={i18n.t("applicationSettings")} />
            <View className="w-full h-[60] flex-row items-center justify-between">
              <Text className="text-base font-semibold dark:text-white">
                {i18n.t("notifications")}
              </Text>
              <View className="flex-row items-center justify-between">
                <Switch />
              </View>
            </View>
            <Divider px={0} py="1" />
            <View className="w-full h-[60] flex-row items-center justify-between">
              <Text className="text-base font-semibold dark:text-white">
                {i18n.t("darkMode")}
              </Text>
              <View className="flex-row items-center justify-between">
                <ColorModeSwitch />
              </View>
            </View>
            {/* Support */}
            <Title title={i18n.t("support")} />
            <Line>
              <Text className="text-base font-semibold dark:text-white">
                {i18n.t("helpCenter")}
              </Text>
              <View className="flex-row items-center justify-between">
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="#2972ff"
                />
              </View>
            </Line>
            <Divider px={0} py="1" />
            <Line>
              <Text className="text-base font-semibold dark:text-white">
                {i18n.t("termsAndConditions")}
              </Text>
              <View className="flex-row items-center justify-between">
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="#2972ff"
                />
              </View>
            </Line>
            {/* FIXME: */}
            <Title title={"Actions"} />
            <Line
              onPress={() => {
                dispatch(logout());
              }}
            >
              <Text className="text-base font-semibold dark:text-white">
                {/* FIXME: */}
                Logout
              </Text>
              <View className="flex-row items-center justify-between">
                {/* FIXME: hook with the state */}

                <MaterialIcons name="logout" size={24} color="#2972ff" />
              </View>
            </Line>
          </ScrollView>
          <LangBottomSheet bottomSheetRef={bottomSheetRef} />
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default SettingsScreen;

const Header = () => {
  const { colorScheme } = useColorScheme();
  const navigation = useNavigation();
  return (
    <View className=" flex-row px-4 py-3 items-center justify-between">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="w-[45] h-[45] bg-white dark:bg-item-dark rounded-full items-center justify-center"
      >
        <Ionicons
          name="ios-chevron-back-sharp"
          size={22}
          color={colorScheme === "dark" ? "#c4c4c4" : "#000"}
        />
      </TouchableOpacity>
      <Text className="text-lg font-semibold dark:text-white">
        {i18n.t("settings")}
      </Text>
      <View className="w-[45] h-[45]" />
    </View>
  );
};

const Title = ({ title }) => {
  return (
    <Text className="text-base text-left font-semibold text-slate-500 dark:text-gray-300 mt-4">
      {title}
    </Text>
  );
};

const Line = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      className="w-full h-[60] flex-row items-center justify-between"
    >
      {children}
    </TouchableOpacity>
  );
};

const ColorModeSwitch = () => {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state) => state.colorMode);
  return (
    <Switch
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      thumbColor={isDark ? "#2972ff" : "#f4f3f4"}
      onValueChange={() => dispatch(toggle())}
      value={isDark}
    />
  );
};
