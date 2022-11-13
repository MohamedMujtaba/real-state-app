import { View, Text, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const ListingAgent = () => {
  return (
    <View className="flex-row items-center p-4 justify-between">
      <View className="flex-row items-center">
        <View className="w-16 h-16 rounded-full bg-gray-200 dark:bg-item-dark mr-2"></View>
        <View className="items justify-between">
          <Text className="mb-2 text-base font-semibold  dark:text-white">
            Mohamed Mujtaba
          </Text>
          <Text className="font-semibold text-gray-300">Partner</Text>
        </View>
      </View>
      <View className="flex-row items-center">
        <TouchableOpacity
          activeOpacity={0.6}
          className="bg-gray-100 dark:bg-item-dark p-3 rounded-full mr-2"
        >
          <Ionicons name="ios-logo-whatsapp" size={22} color="#25D366" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          className="bg-gray-100 dark:bg-item-dark p-3 rounded-full "
        >
          <Ionicons name="ios-call-sharp" size={22} color="#2972FF" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default ListingAgent
