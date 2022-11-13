import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useState } from "react";
import ItemSmall from "./ItemSmall";
import { useColorScheme } from "nativewind";
import { i18n } from "../utils/localizations";
const Tabs = () => {
  const [selected, setSelected] = useState(0);
  return (
    <View className="w-full px-4">
      <Buttons selected={selected} setSelected={setSelected} />
      <View className="mt-4 ">
        {[1, 2, 3].map((item) => (
          <ItemSmall key={item} width={"100%"} />
        ))}
      </View>
    </View>
  );
};

const Buttons = ({ selected, setSelected }) => {
  const { colorScheme } = useColorScheme();
  return (
    <View className="w-full h-[50] bg-[#F8FAFC] dark:bg-item-dark rounded-md flex-row items-center justify-evenly">
      <TouchableOpacity
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
      </TouchableOpacity>
    </View>
  );
};
export default Tabs;
