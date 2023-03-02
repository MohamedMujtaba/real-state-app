import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import z from "zod";
import { fromZodError } from "zod-validation-error";
import Animated, { FadeInUp, FadeOutDown } from "react-native-reanimated";
const Input = ({
  type,
  left,
  right,
  value,
  setValue = () => {},
  secure,
  schema,
  max,
  placeholder,
}) => {
  const [err, setErr] = useState("");
  const checkInput = async () => {
    try {
      const result = await schema?.parseAsync(value);
      setErr("");
    } catch (error) {
      setErr(fromZodError(error).message.split(":")[1]);
    }
  };
  useEffect(() => {
    checkInput();
  }, [value]);

  return (
    <View className="w-full  mb-4  justify-center ">
      <View className="w-full h-16 items-center justify-center">
        <TextInput
          className="w-full h-full bg-gray-100 rounded-md px-14 text-lg"
          secureTextEntry={secure}
          cursorColor="#93c5fd"
          selectionColor="#93c5fd"
          keyboardType={type}
          onChangeText={(text) => setValue(text)}
          maxLength={max}
          placeholder={placeholder}
        />
        <View className="absolute left-4">{left}</View>
        <View className="absolute right-4">{right}</View>
      </View>
      {err && (
        <Animated.View
          className=" bottom-0 left-2"
          entering={FadeInUp}
          exiting={FadeOutDown}
        >
          <View>
            {err.split(";").map((i, index) => (
              <Text className=" text-red-400 ">{i}</Text>
            ))}
          </View>
        </Animated.View>
      )}
      {!err && value && (
        <Animated.View
          className="bottom-0 left-2"
          entering={FadeInUp}
          exiting={FadeOutDown}
        >
          <Text className=" text-green-400 ">Every thing is OK </Text>
        </Animated.View>
      )}
    </View>
  );
};

export default Input;
