import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import React from "react";
import Input from "../../components/Input";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useState } from "react";
import { z } from "zod";
import {
  PasswordSchema,
  PhoneSchema,
  UserNameSchema,
} from "../../utils/validation/schema";
import SubmitButton from "../../components/SubmitButton";
import { useDispatch } from "react-redux";
import { login } from "../../../Redux/authSlice";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
    >
      <SafeAreaView className="flex-1 items-center justify-center p-4">
        <View className="my-6 w-full">
          <Text className="text-lg w-[90%] font-semibold">
            <Text className="text-brand text-3xl font-bold">Sign up </Text>
            <Text>and discover </Text>
            <Text className="text-brand font-bold">The New Way </Text>
            <Text>of finding your</Text>
            <Text className="text-brand font-extrabold"> Dream Home </Text>
            <Text>!!</Text>
          </Text>
        </View>
        {/* User Name */}
        <Input
          left={<AntDesign name="user" size={24} color="black" />}
          value={name}
          setValue={setName}
          schema={UserNameSchema}
          max={25}
          placeholder={"Enter you username"}
        />
        {/* User Phone Number */}
        <Input
          left={<Feather name="phone" size={24} color="black" />}
          type="phone-pad"
          value={phone}
          setValue={setPhone}
          schema={PhoneSchema}
          max={9}
          placeholder={"Number eg: 912345678"}
        />
        {/* User Whatsapp */}
        <Input
          left={<Ionicons name="ios-logo-whatsapp" size={24} color="black" />}
          type="phone-pad"
          value={whatsapp}
          setValue={setWhatsapp}
          schema={PhoneSchema}
          max={9}
          placeholder={"Whatsapp eg: 912345678"}
        />
        {/* User Password */}
        <Input
          left={<MaterialIcons name="lock-outline" size={24} color="black" />}
          schema={PasswordSchema}
          secure={!showPassword}
          value={password}
          setValue={setPassword}
          placeholder={"Enter your password"}
          right={
            <TouchableOpacity
              onPress={() => setShowPassword((prev) => !prev)}
              className="h-9 items-center justify-center"
            >
              {showPassword ? (
                <Ionicons name="eye-off-outline" size={24} color="black" />
              ) : (
                <Ionicons name="eye-outline" size={24} color="black" />
              )}
            </TouchableOpacity>
          }
        />
        <SubmitButton
          title={"Sign up"}
          isLoading={loading}
          onPress={() => {
            setLoading(true);
            dispatch(login());
          }}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
