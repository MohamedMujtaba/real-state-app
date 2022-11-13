import Svg, { G, Path } from "react-native-svg";
import * as React from "react";
import { Text, View } from "react-native";
const LocationIcon = (props) => {
  const { fill } = props;
  return (
    // <View className="p-1 w-[14] h-[15] items-center justify-center">
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <G data-name="Location" fill={fill || "#2972ff"}>
        <Path d="M12 14.75A4.75 4.75 0 1 1 16.75 10 4.756 4.756 0 0 1 12 14.75Zm0-8A3.25 3.25 0 1 0 15.25 10 3.254 3.254 0 0 0 12 6.75Z" />
        <Path
          data-name="Shape"
          d="M12 21.917a2.178 2.178 0 0 1-1.693-.8L5.514 15.25a8.9 8.9 0 0 1-1.989-6.4 8.287 8.287 0 0 1 8.259-7.6h.432a8.287 8.287 0 0 1 8.259 7.607 8.9 8.9 0 0 1-1.989 6.393l-4.792 5.865a2.178 2.178 0 0 1-1.694.802ZM11.784 2.75A6.787 6.787 0 0 0 5.02 8.98a7.4 7.4 0 0 0 1.656 5.323l4.793 5.863a.688.688 0 0 0 1.064 0l4.792-5.863A7.4 7.4 0 0 0 18.98 8.98a6.787 6.787 0 0 0-6.764-6.23Z"
        />
      </G>
    </Svg>

    // </View>
  );
};

export default LocationIcon;
