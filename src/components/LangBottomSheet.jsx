import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { useMemo } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../Redux/langSlice";
import * as Updates from "expo-updates";
import { useColorScheme } from "nativewind";

const LangBottomSheet = ({ bottomSheetRef }) => {
  const snapPoints = useMemo(() => ["50%"], []);
  const { height } = Dimensions.get("window");
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.lang);
  const { colorScheme } = useColorScheme();
  const f = async () => {
    try {
      await Updates.reloadAsync();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      // onChange={handleSheetChanges}
      enablePanDownToClose={true}
      style={{
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
      }}
      backgroundStyle={{
        backgroundColor: colorScheme === "dark" ? "#1E293B" : "#fff",
      }}
    >
      <View className="flex-1 items-center justify-center">
        <TouchableOpacity
          className="p-4 w-[70%] rounded-full items-center justify-center mb-4 border-item-dark dark:border-item-light"
          style={{
            backgroundColor:
              language === "en"
                ? colorScheme === "dark"
                  ? "#fff"
                  : "#1E293B"
                : null,
            borderWidth: language === "ar" ? StyleSheet.hairlineWidth : 0,
          }}
          onPress={() => {
            bottomSheetRef.current.close();
            if (language === "ar") {
              dispatch(changeLang("en"));
              setTimeout(() => f(), 500);
            }
          }}
        >
          <Text
            style={{
              color:
                language === "en"
                  ? colorScheme === "dark"
                    ? "#1E293B"
                    : "#fff"
                  : colorScheme === "light"
                  ? "#1E293B"
                  : "#fff",
            }}
          >
            English
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="p-4 w-[70%] rounded-full items-center justify-center mb-4 border-item-dark dark:border-item-light"
          style={{
            backgroundColor:
              language === "ar"
                ? colorScheme === "dark"
                  ? "#fff"
                  : "#1E293B"
                : null,
            borderWidth: language === "en" ? StyleSheet.hairlineWidth : 0,
          }}
          onPress={() => {
            bottomSheetRef.current.close();
            if (language === "en") {
              dispatch(changeLang("ar"));
              setTimeout(() => f(), 500);
            }
          }}
        >
          <Text
            style={{
              color:
                language === "ar"
                  ? colorScheme === "dark"
                    ? "#1E293B"
                    : "#fff"
                  : colorScheme === "light"
                  ? "#1E293B"
                  : "#fff",
            }}
          >
            العربية
          </Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
};

export default LangBottomSheet;
