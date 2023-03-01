import { View } from "react-native";
import ImageSlider from "../../components/ImageSlider";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DetailsActionArea from "../components/DetailsActionArea";
import DetailsBottomSheet from "../components/DetailsBottomSheet";
import DetailsHeader from "../components/DetailsHeader";
import ImageModel from "../../components/ImageModel";
import Image360 from "../../components/Image360";
import { StatusBar } from "expo-status-bar";

const DetailsScreen = () => {
  return (
    <GestureHandlerRootView className="flex-1 bg-white dark:bg-brand-dark">
      {/* <ImageModel /> */}
      {/* <Image360 /> */}
      <StatusBar hidden />
      <BottomSheetModalProvider>
        <DetailsHeader />
        <View className="flex-1">
          <ImageSlider />
          <View className="flex-1">
            <DetailsBottomSheet />
          </View>
        </View>
        <DetailsActionArea />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default DetailsScreen;
