import { View, Text, TouchableOpacity } from "react-native";

const DetailsActionArea = () => {
  return (
    <View
      className="absolute bottom-0 left-0 right-0 h-[70] bg-white dark:bg-item-dark px-4 flex-row items-center justify-between"
      style={{
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.21,
        shadowRadius: 7.68,
        elevation: 10,
      }}
    >
      <View className="w-[55%] h-[80%]  rounded-md items-start justify-center">
        <Text className="text-base font-semibold text-gray-400">Price</Text>
        <View className="flex-row items-baseline">
          <Text className="text-2xl font-bold text-[#2972FF]">$1,199</Text>
          <Text className="text-base font-semibold text-gray-400">/month</Text>
        </View>
      </View>
      <TouchableOpacity className="w-[40%] h-[80%] bg-[#2972FF] rounded-md items-center justify-center">
        <Text className="text-lg font-semibold text-white">Rent</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsActionArea;
