import { View, Text, Dimensions, ActivityIndicator } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";
import { useState } from "react";
const Image360 = () => {
  const { width, height } = Dimensions.get("screen");
  const [loading, setLoading] = useState(false);
  const docStyle = `
  document.body.style.width = ${width};
  document.body.style.height =${height};
  document.body.style.margin =0;
  document.body.style.padding =0;
  document.body.style.backgroundColor ="red";
  `;
  const h = `
    <div style="display:flex; flex-direction: column;justify-content: center; 
        align-items:center; background-color: black; color:white; height: 100%;" >
      <iframe width="100%" height="100%" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" src="https://kuula.co/share/NjV1w?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"></iframe>
    </div>
  `;
  return (
    <View className="flex-1 absolute inset-0 z-50">
      {loading && (
        <View className="absolute inset-0 z-50 bg-gray-50/30 items-center justify-center">
          <ActivityIndicator color="#009688" size="large" />
        </View>
      )}
      <WebView
        source={{
          // html: h,
          uri: "https://kuula.co/share/NjV1w?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&thumbs=1",
        }}
        onLoadStart={(e) => setLoading(true)}
        onLoadEnd={(e) => setLoading(false)}
        // injectedJavaScript={docStyle}
      />
    </View>
  );
};

export default Image360;
