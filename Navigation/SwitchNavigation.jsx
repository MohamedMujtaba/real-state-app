import NormalNavigation from "./NormalNavigation";
import AuthNavigation from "../src/Auth/Navigation/AuthNavigation";
import { useSelector } from "react-redux";
import { i18n } from "../src/utils/localizations";
import { useEffect } from "react";

const SwitchNavigation = () => {
  const { mode } = useSelector((state) => state.auth);
  // i18n.enableFallback = true
  // useEffect(() => {
  //   i18n.locale = language
  // }, [language])
  if (mode === "easy") {
    return <AuthNavigation />;
  }
  if (mode === "normal") {
    return <NormalNavigation />;
  }
};

export default SwitchNavigation;
