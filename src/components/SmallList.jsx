import { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { i18n } from "../utils/localizations";

const SmallList = ({
  title = i18n.t("nearbyYou"),
  data = [],
  ItemComponent = () => <View />,
  pagingEnabled = false,
}) => {
  const ref = useRef(null);

  return (
    <View className="pl-4 pt-4 pb-4  ">
      <TouchableOpacity
        onPress={() => {
          ref.current.scrollToIndex(0);
        }}
      ></TouchableOpacity>
      <View className="w-[100%] pr-4 flex-row items-center justify-between mb-4">
        <Text className="text-lg font-semibold text-[#1E293B] dark:text-gray-200">
          {title}
        </Text>
        <TouchableOpacity>
          <Text className="text-base text-[#2972FF]">{i18n.t("seeMore")}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        ref={ref}
        data={data}
        renderItem={() => ItemComponent}
        keyExtractor={(_, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={pagingEnabled}
        // onMomentumScrollEnd={(event) => {
        //   const index = Math.floor(
        //     Math.floor(event.nativeEvent.contentOffset.x) /
        //       Math.floor(event.nativeEvent.layoutMeasurement.width)
        //   );
        //   setCurrIndex(index);
        //   // work with: index
        // }}
      />
    </View>
  );
};

export default SmallList;
