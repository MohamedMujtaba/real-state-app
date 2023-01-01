import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useColorScheme } from "nativewind";
import BottomSheet from "@gorhom/bottom-sheet";

const WayToAddBalanceBottomSheet = ({ bottomSheetRef }) => {
  const snapPoints = useMemo(() => ["80%"], []);
  const { height } = Dimensions.get("window");
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.lang);
  const { colorScheme } = useColorScheme();

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
          className="flex-row px-4 py-2 w-[70%] rounded-full items-center justify-center mb-4 border-item-dark dark:border-item-light "
          style={{ borderWidth: StyleSheet.hairlineWidth }}
        >
          <Image
            source={require("../../assets/img/Icons/mbok.png")}
            className="h-12 mr-1"
            resizeMode="contain"
          />
          {/* <Text className=" dark:text-white ">Bank of Khartoum</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row px-4 py-2 w-[70%] rounded-full items-center justify-center mb-4 border-item-dark dark:border-item-light "
          style={{ borderWidth: StyleSheet.hairlineWidth }}
        >
          <Image
            source={require("../../assets/img/Icons/nileBank.png")}
            className="mr-1 h-12"
            resizeMode="contain"
          />
          {/* <Text className=" dark:text-white ">Bank of Khartoum</Text> */}
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
};

export default WayToAddBalanceBottomSheet;
