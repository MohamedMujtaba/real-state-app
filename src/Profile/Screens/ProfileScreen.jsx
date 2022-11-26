import { ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Tabs from "../../components/Tabs";
import { i18n } from "../../utils/localizations";
import ProfileImgSection from "../components/ProfileImgSection";
import ProfileHeader from "../components/ProfileHeader";
import UserReadyOffers from "../components/UserReadyOffers";
import UserReviewingOffers from "../components/UserReviewingOffers";

const ProfileScreen = () => {
  const titles = [i18n.t("ready"), i18n.t("reviewing")];
  return (
    <SafeAreaView className="flex-1 dark:bg-brand-dark ">
      <ScrollView>
        {/* header */}
        <ProfileHeader />
        <ProfileImgSection />
        <Tabs
          titles={titles}
          titleWidth="45%"
          screens={[<UserReadyOffers />, <UserReviewingOffers />]}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
