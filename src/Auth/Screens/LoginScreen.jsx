import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../../Redux/authSlice";

const LoginScreen = () => {
  const dispatch = useDispatch();
  return (
    <View className="flex-1 items-center justify-center">
      <TouchableOpacity onPress={() => dispatch(changeMode())}>
        <Text>LoginScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
