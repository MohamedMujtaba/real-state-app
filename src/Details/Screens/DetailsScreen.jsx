import { View } from "react-native"
import ImageSlider from "../../components/ImageSlider"
import DetailsHeader from "../../components/DetailsHeader"

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import DetailsBottomSheet from "../../components/DetailsBottomSheet"
import DetailsActionArea from "../../components/DetailsActionArea"
const DetailsScreen = () => {
  return (
    <GestureHandlerRootView className="flex-1 bg-white dark:bg-brand-dark">
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
  )
}

export default DetailsScreen
