import { BlurView } from "expo-blur";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import ItemSmall from "./ItemSmall";
function ExploreList() {
  const { width, height } = Dimensions.get("window");
  const { colorScheme } = useColorScheme();
  const [c, setC] = useState(colorScheme);
  useEffect(() => {
    setC(colorScheme);
  }, [colorScheme]);
  return (
    <GestureHandlerRootView
      style={{ width }}
      className="absolute bottom-0 z-50 items-center justify-center"
    >
      {/* FIXME: */}
      <Animated.View entering={FadeInUp}>
        <BlurView
          style={{ width, height: height * 0.27 }}
          intensity={100}
          tint={c === "dark" ? "dark" : "light"}
          className="items-center justify-center rounded-t-xl"
        >
          <Carousel
            loop
            width={width}
            height={height * 0.25}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.87,
              parallaxScrollingOffset: 75,
            }}
            // autoPlay={true}
            data={[...new Array(6).keys()]}
            scrollAnimationDuration={1000}
            // onSnapToItem={(index) => console.log("current index:", index)}
            renderItem={({ index }) => <ItemSmall width="95%" />}
          />
        </BlurView>
      </Animated.View>
    </GestureHandlerRootView>
  );
}

export default ExploreList;
