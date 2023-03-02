import { View, Text, Dimensions, ActivityIndicator } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";
import { useState } from "react";
const Image360 = () => {
  const { width, height } = Dimensions.get("screen");
  const [loading, setLoading] = useState(false);
  return (
    <View className="flex-1 absolute inset-0 z-50">
      {loading && (
        <View className="absolute inset-0 z-50 bg-gray-50/30 items-center justify-center">
          <ActivityIndicator color="#3b82f6" size="large" />
        </View>
      )}
      <WebView
        source={{
          uri: "https://kuula.co/share/NjV1w?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&thumbs=1",
        }}
        onLoadStart={(e) => setLoading(true)}
        onLoadEnd={(e) => setLoading(false)}
      />
    </View>
  );
};

export default Image360;
