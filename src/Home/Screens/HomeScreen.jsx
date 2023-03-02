import { View, ScrollView } from "react-native";
import UserLocationComponent from "../../components/UserLocationComponent";
import SimpleSearchComponent from "../../components/SimpleSearchComponent";
import SelectTypeSimple from "../../components/SelectTypeSimple";
import SmallList from "../../components/SmallList";
import ItemMedium from "../../components/ItemMedium";
import ItemLarge from "../../components/ItemLarge";
import { i18n } from "../../utils/localizations";

const data = [
  {
    title: " Lorem, ipsum dolor",
    city: "Khartoum",
    address: "ipsum dolor",
    owner: {
      name: "Mohamed Mujtaba",
    },
    details: [
      {
        name: "bath",
        num: 1,
      },
      {
        name: "room",
        num: 3,
      },
    ],
    images: [
      require("../../../assets/img/Rectangle.png"),
      require("../../../assets/img/Rectangle-1.png"),
      require("../../../assets/img/Rectangle-2.png"),
      require("../../../assets/img/Rectangle-3.png"),
    ],
    price: 130,
  },
  {
    title: " Lorem, ipsum dolor",
    city: "Khartoum",
    address: "ipsum dolor",
    owner: {
      name: "Mohamed Mujtaba",
    },
    details: [
      {
        name: "bath",
        num: 1,
      },
      {
        name: "room",
        num: 3,
      },
    ],
    images: [
      require("../../../assets/img/Rectangle-3.png"),
      require("../../../assets/img/Rectangle.png"),
      require("../../../assets/img/Rectangle-1.png"),
      require("../../../assets/img/Rectangle-2.png"),
    ],
    price: 100,
  },
  {
    title: " Lorem, ipsum dolor",
    city: "Khartoum",
    address: "ipsum dolor",
    owner: {
      name: "Mohamed Mujtaba",
    },
    details: [
      {
        name: "bath",
        num: 1,
      },
      {
        name: "room",
        num: 3,
      },
    ],
    images: [
      require("../../../assets/img/Rectangle-2.png"),
      require("../../../assets/img/Rectangle.png"),
      require("../../../assets/img/Rectangle-1.png"),
      require("../../../assets/img/Rectangle-3.png"),
    ],
    price: 250,
  },
  {
    title: " Lorem, ipsum dolor",
    city: "Khartoum",
    address: "ipsum dolor",
    owner: {
      name: "Mohamed Mujtaba",
    },
    details: [
      {
        name: "bath",
        num: 1,
      },
      {
        name: "room",
        num: 3,
      },
    ],
    images: [
      require("../../../assets/img/Rectangle-1.png"),
      require("../../../assets/img/Rectangle.png"),
      require("../../../assets/img/Rectangle-2.png"),
      require("../../../assets/img/Rectangle-3.png"),
    ],
    price: 120,
  },
];
const HomeScreen = () => {
  return (
    <ScrollView className="flex-1  dark:bg-brand-dark  ">
      <View className="w-full flex-row items-center justify-between">
        <UserLocationComponent />
        {/* <ColorSchemaToggle /> */}
      </View>
      <SimpleSearchComponent />
      {/* <SelectTypeSimple /> */}
      <SmallList ItemComponent={<ItemMedium mr={20} />} data={data} />
      <SmallList
        ItemComponent={<ItemLarge mr={20} />}
        data={data}
        // pagingEnabled={true}
        title={i18n.t("recommendedToYou")}
      />
    </ScrollView>
  );
};

export default HomeScreen;
