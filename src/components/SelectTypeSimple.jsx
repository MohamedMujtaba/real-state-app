import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useColorScheme } from "nativewind";
import { i18n } from "../utils/localizations";

const types = [
  {
    title: "House",
    img: require("../../assets/img/Icons/house.png"),
  },
  {
    title: "Apartment",
    img: require("../../assets/img/Icons/buildings.png"),
  },
  {
    title: "Hotel",
    img: require("../../assets/img/Icons/hotel.png"),
  },
];

const SelectTypeSimple = () => {
  const [selected, setSelected] = useState(null);
  return (
    <View className="w-[100%] pl-4 pt-4 pb-4 ">
      <View>
        <FlatList
          data={types}
          renderItem={({ item }) => (
            <Item item={item} selected={selected} setSelected={setSelected} />
          )}
          keyExtractor={(item) => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const Item = ({ item, selected, setSelected }) => {
  const { colorScheme } = useColorScheme();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      className="w-[115] h-[115] rounded-2xl  border-gray-400 dark:border-item-dark items-center justify-center mr-2"
      style={{
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor:
          selected === item.title
            ? colorScheme === "dark"
              ? "#1E293B"
              : "#e2e8f0"
            : null,
      }}
      onPress={() => setSelected(item.title)}
    >
      <Image source={item.img} className="w-[50] h-[50]" resizeMode="contain" />
      <Text className="font-semibold text-base dark:text-gray-300 mt-1">
        {i18n.t(item.title.toLowerCase())}
      </Text>
    </TouchableOpacity>
  );
};

export default SelectTypeSimple;
