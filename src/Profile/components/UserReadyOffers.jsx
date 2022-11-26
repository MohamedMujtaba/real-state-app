import { View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import ItemSmall from "../../components/ItemSmall";

const UserReadyOffers = () => {
  return (
    <Animated.View
      className="w-full"
      entering={FadeIn.delay(20)}
      exiting={FadeOut}
    >
      <ItemSmall width="100%" />
      <ItemSmall width="100%" />
      <ItemSmall width="100%" />
    </Animated.View>
  );
};

export default UserReadyOffers;
