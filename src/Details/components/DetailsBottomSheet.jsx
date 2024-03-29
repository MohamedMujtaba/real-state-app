import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import LocationIcon from "../../utils/Icons/LocationIcon";
import InfoTag from "../../components/InfoTag";
import Divider from "../../components/Divider";
import SmallMap from "../../components/SmallMap";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useColorScheme } from "nativewind";
import ListingAgent from "../../components/ListingAgent";
import Tabs from "../../components/Tabs";
import { useNavigation } from "@react-navigation/native";

const DetailsBottomSheet = () => {
  // hooks
  const sheetRef = useRef(null);
  const scrollRef = useRef(null);

  const snapPoints = useMemo(() => ["50%", "88%"], []);

  const [scrollTop, setScrollTop] = useState(false);

  const { colorScheme } = useColorScheme();
  const navigation = useNavigation();
  return (
    <BottomSheet
      ref={sheetRef}
      index={0}
      snapPoints={snapPoints}
      // FIXME:
      // onChange={(index) =>
      //   scrollRef.current.scrollTo({ x: 0, duration: 20000 })
      // }
      style={{
        flex: 1,
        zIndex: 100,
      }}
      backgroundStyle={{
        backgroundColor: colorScheme === "dark" ? "#131926" : "#fff",
      }}
    >
      <BottomSheetScrollView
        ref={scrollRef}
        contentContainerStyle={{
          paddingBottom: 70,
        }}
        // className="bg-red-600"
      >
        <View className="px-4 pb-4">
          <View className="flex-row  justify-between">
            <Text className="text-2xl font-semibold dark:text-white w-[80%]">
              Whitespace house
            </Text>
            <TouchableOpacity
              className=""
              onPress={() => navigation.navigate("Image360")}
            >
              <Image
                className="w-12 h-12"
                source={require("../../../assets/img/Icons/panorama.png")}
              />
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center mt-1">
            <LocationIcon fill="#94a3b8" />
            <Text className="text-lg font-semibold text-gray-400 ">
              Khartoum, Sudan
            </Text>
          </View>
        </View>
        {/* Info Tags */}
        <View className="px-4 pb-4 ">
          <FlatList
            data={[1, 2, 3]}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <InfoTag {...item} />}
          />
        </View>
        <Divider />
        <ListingAgent />

        <Divider />
        {/* Details */}
        <View className="p-4">
          <Text className="text-lg font-semibold mb-1">Details</Text>
          <Text className="text-base font-semibold text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            sint debitis aliquid in, dicta velit laudantium error nemo cum!
            Ipsum pariatur recusandae repellat doloribus. Quam voluptates,
            cumque corrupti consectetur nihil minima architecto! Nostrum
            suscipit distinctio maxime at obcaecati dolor nam. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Mollitia sint debitis
            aliquid in, dicta velit laudantium error nemo cum! Ipsum pariatur
            recusandae repellat doloribus. Quam voluptates, cumque corrupti
            consectetur nihil minima architecto! Nostrum suscipit distinctio
            maxime at obcaecati dolor nam. Lorem ipsum, dolor sit amet nam.
          </Text>
        </View>
        <SmallMap />
        <View className="flex-1">
          <Tabs />
        </View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default DetailsBottomSheet;
