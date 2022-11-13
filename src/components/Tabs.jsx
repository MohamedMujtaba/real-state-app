import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import React, { useEffect } from "react"
import { useState } from "react"
import ItemSmall from "./ItemSmall"
import { useColorScheme } from "nativewind"
import { i18n } from "../utils/localizations"
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
  Layout,
  Transition,
} from "react-native-reanimated"
const Tabs = ({
  titles = ["red", "green", "blue"],
  titleWidth = "30%",
  screens = [
    <Animated.View
      className="h-[200] w-full bg-red-300"
      entering={FadeIn.delay(50)}
      exiting={FadeOut}
    />,
    <Animated.View
      className="h-[200] w-full bg-green-300"
      entering={FadeIn.delay(50)}
      exiting={FadeOut}
    />,
    <Animated.View
      className="h-[200] w-full bg-blue-300"
      entering={FadeIn.delay(50)}
      exiting={FadeOut}
    />,
  ],
}) => {
  const [selected, setSelected] = useState(0)

  return (
    <Animated.View className="w-full px-4">
      <Buttons
        selected={selected}
        setSelected={setSelected}
        titles={titles}
        titleWidth={titleWidth}
      />
      <Animated.View className="mt-4">
        {/* {v} */}
        {screens.map(
          (screen, index) =>
            index === selected && <View key={index}>{screen}</View>
        )}
      </Animated.View>
    </Animated.View>
  )
}

const Buttons = ({ selected, setSelected, titles, titleWidth }) => {
  const { colorScheme } = useColorScheme()
  return (
    <View className="w-full h-[50] bg-[#F8FAFC] dark:bg-item-dark rounded-md flex-row items-center justify-evenly">
      {titles.map((title, index) => {
        return (
          <TouchableOpacity
            key={index.toString()}
            onPress={() => setSelected(index)}
            className="h-[80%] items-center justify-center rounded-md"
            style={{
              width: titleWidth,
              backgroundColor:
                selected === index
                  ? colorScheme === "dark"
                    ? "#131926"
                    : "#fff"
                  : null,
            }}
          >
            <Text
              className="font-semibold"
              style={{
                color:
                  selected === index
                    ? "#2972ff"
                    : colorScheme === "dark"
                    ? "#e2e8f0"
                    : "#131926",
              }}
            >
              {title}
            </Text>
          </TouchableOpacity>
        )
      })}
      {/* <TouchableOpacity
        onPress={() => setSelected(0)}
        className="w-[45%] h-[80%] items-center justify-center rounded-md"
        style={{
          backgroundColor:
            selected === 0
              ? colorScheme === "dark"
                ? "#131926"
                : "#fff"
              : null,
        }}
      >
        <Text
          className="font-semibold"
          style={{
            color:
              selected === 0
                ? "#2972ff"
                : colorScheme === "dark"
                ? "#e2e8f0"
                : "#131926",
          }}
        >
          {i18n.t("ready")}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelected(1)}
        className="w-[45%] h-[80%] items-center justify-center rounded-md "
        style={{
          backgroundColor:
            selected === 1
              ? colorScheme === "dark"
                ? "#131926"
                : "#fff"
              : null,
        }}
      >
        <Text
          className="font-semibold"
          style={{
            color:
              selected === 1
                ? "#2972ff"
                : colorScheme === "dark"
                ? "#e2e8f0"
                : "#131926",
          }}
        >
          {i18n.t("reviewing")}
        </Text>
      </TouchableOpacity> */}
    </View>
  )
}
export default Tabs
