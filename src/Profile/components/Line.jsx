import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { NumberFormat } from "../../utils/helpers";
import { i18n } from "../../utils/localizations";

const Line = ({ status, title, amount = 300000 }) => {
  const f = () => {
    if (status === "withdrawn") {
      return [
        // #ef4444
        "#fef9c3",
        i18n.t("withdrawnFromYourAccount"),
        "#fef08a",
        <Ionicons name="remove-circle-sharp" size={30} color="#fef08a" />,
      ];
    }
    if (status === "added") {
      return [
        "#bbf7d0",
        i18n.t("addedToYourAccount"),
        "#4ade80",
        <Ionicons name="ios-add-circle-sharp" size={30} color="#4ade80" />,
      ];
    }
  };
  return (
    <View className="w-full flex-row items-center py-4">
      <View
        className="mr-2 items-center justify-center"
        // className="w-[60] h-[60] rounded-full mr-2 items-center justify-center"
        // style={{ backgroundColor: f()[0] }}
      >
        {f()[3]}
      </View>
      <View className="mr-2">
        <Text className="text-lg font-semibold dark:text-white text-left">
          {title}
        </Text>
        <Text className="text-gray-300 dark:text-gray-500">{f()[1]}</Text>
      </View>
      <View className="item-center flex-1">
        <Text
          className="text-right text-lg font-bold"
          style={{ color: f()[2] }}
        >
          {NumberFormat(amount)}
        </Text>
      </View>
    </View>
  );
};

export default Line;
