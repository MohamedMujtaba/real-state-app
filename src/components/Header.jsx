import { TextInput, View } from "react-native";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
const Header = () => {
  return (
    <SafeAreaView className="w-full h-[90] flex-row items-center justify-between px-4 mb-4">
      <Ionicons name="ios-arrow-back" size={20} color="black" />
      <TextInput
        className="w-[75%] bg-gray-200 rounded-full px-4 py-1"
        placeholder="Search for something ☺... "
      />
      <Entypo name="sound-mix" size={20} color="black" />
    </SafeAreaView>
  );
};

export default Header;
{
  /* <SafeAreaView className="w-full h-[150] bg-slate-50 flex-row items-center justify-between px-4">
      <Ionicons name="ios-arrow-back" size={20} color="black" />
      <TextInput
        className="w-[75%] bg-gray-200 rounded-full px-4 py-1"
        placeholder="Search for something ☺... "
      />
      <Entypo name="sound-mix" size={20} color="black" />
    </SafeAreaView> */
}
