import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";
import ExploreList from "../../components/ExploreList";
import SimpleSearchComponent from "../../components/SimpleSearchComponent";
import { useColorScheme } from "nativewind";
import { mapDark } from "../../utils/mapStyles";

const arr = [
  {
    latitude: 15.562360100508753,
    longitude: 32.53410354056624,
  },
  {
    latitude: 15.526248972332764,
    longitude: 32.493165968219806,
  },
  {
    latitude: 15.526141907613182,
    longitude: 32.4932949836589,
  },
  {
    latitude: 15.526267247626384,
    longitude: 32.49337612048108,
  },
  {
    latitude: 15.525833631454198,
    longitude: 32.49669908036703,
  },
];
const ExploreScreen = () => {
  const [userLocation, setUserLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // TaskManager.defineTask(YOUR_TASK_NAME, ({ data: { locations }, error }) => {
  //   if (error) {
  //     // check `error.message` for more details.
  //     return;
  //   }
  //   console.log("Received new locations", locations);
  // });
  const getUserLocation = async () => {
    let { status } = await Location.requestBackgroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
      accuracy: Location.Accuracy.BestForNavigation,
      // accuracy: Location.Accuracy.High,
    });
    setUserLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };
  useEffect(() => {
    getUserLocation();
  }, []);
  const { colorScheme } = useColorScheme();
  const [c, setC] = useState(colorScheme);
  useEffect(() => {
    setC(colorScheme);
  }, [colorScheme]);
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="absolute z-20 w-full">
        <SimpleSearchComponent />
      </SafeAreaView>
      <View style={styles.container}>
        <MapView
          key={c}
          style={styles.map}
          region={userLocation}
          customMapStyle={c === "dark" ? mapDark : null}
          // showsUserLocation={true}
          // onUserLocationChange={({ location }) => console.log(location)}
        >
          {arr.map((item, index) => (
            <Marker
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              key={index + item.latitude}
            >
              <View className="min-w-[100] h-10 bg-white rounded-lg p-3 items-center justify-center">
                <Text>Mohamed</Text>
              </View>
            </Marker>
          ))}
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
          ></Marker>
        </MapView>
      </View>
      <ExploreList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default ExploreScreen;
