import { Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { i18n } from "../../utils/localizations";
import BalanceSection from "../components/BalanceSection";
import Line from "../components/Line";
import WayToAddBalanceBottomSheet from "../../components/WayToAddBalanceBottomSheet";
import { useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const BalanceScreen = () => {
  const bottomSheetRef = useRef(null);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="flex-1 bg-white dark:bg-brand-dark">
        <BalanceSection bottomSheetRef={bottomSheetRef} />
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
        <WayToAddBalanceBottomSheet bottomSheetRef={bottomSheetRef} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

// TODO: need more thinking
export default BalanceScreen;
