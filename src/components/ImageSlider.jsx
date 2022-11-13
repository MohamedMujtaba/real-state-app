import { View, Text, FlatList, Image, Dimensions } from "react-native"
import React from "react"
import Carousel from "react-native-reanimated-carousel"
import { GestureHandlerRootView } from "react-native-gesture-handler"
const data = [
  require("../../assets/img/Rectangle.png"),
  require("../../assets/img/Rectangle-1.png"),
  require("../../assets/img/Rectangle-2.png"),
  require("../../assets/img/Rectangle-3.png"),
]

const ImageSlider = () => {
  const { width, height } = Dimensions.get("window")
  return (
    <GestureHandlerRootView
      className="items-center absolute top-0 left-0 right-0  "
      style={{ width: width, height: "50%" }}
    >
      {/* <View className="w-full h-6 bg-white dark:bg-brand-dark absolute bottom-0 z-20 rounded-t-2xl" /> */}
      <Carousel
        enabled={true}
        loop
        width={width}
        height={height * 0.55}
        // mode="parallax"
        // modeConfig={{
        //   parallaxScrollingScale: 0.9,
        //   parallaxScrollingOffset: 50,
        // }}
        autoPlay={true}
        data={data}
        autoPlayInterval={5000}
        scrollAnimationDuration={1000}
        // onSnapToItem={(index) => console.log("current index:", index)}
        // pagingEnabled={true}
        className="items-center rounded-b-xl overflow-hidden"
        renderItem={({ item }) => (
          <View className="flex-1">
            <Image
              // className="rounded-xl"
              source={item}
              resizeMode="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        )}
      />
    </GestureHandlerRootView>
  )
}

export default ImageSlider
