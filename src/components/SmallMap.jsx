import { View, Text, Dimensions } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { mapDark } from "../utils/mapStyles";
import { useColorScheme } from "nativewind";

const SmallMap = () => {
  const { width } = Dimensions.get("window");
  const { colorScheme } = useColorScheme();

  return (
    <View className="p-4">
      <View
        className="rounded-md bg-white h-1/2 overflow-hidden"
        style={{ height: width * 0.5 }}
      >
        <MapView
          showsUserLocation={true}
          showsMyLocationButton={false}
          scrollEnabled={false}
          loadingEnabled={true}
          style={{ width: "100%", height: "100%" }}
          customMapStyle={colorScheme === "dark" ? mapDark : null}
          region={{
            latitude: 15.562360100508753,
            longitude: 32.53410354056624,
            latitudeDelta: 0.1,
            longitudeDelta: 0.2,
          }}
        ></MapView>
      </View>
    </View>
  );
};

export default SmallMap;
