import { View, Text, Animated } from "react-native";
import React from "react";
import ItemSmall from "../../components/ItemSmall";
import { FadeIn, FadeOut } from "react-native-reanimated";

const UserReviewingOffers = () => {
  return (
    <Animated.View
      className="w-full"
      entering={FadeIn.delay(20)}
      exiting={FadeOut}
    >
      <ItemSmall width="100%" />
    </Animated.View>
  );
};

export default UserReviewingOffers;
