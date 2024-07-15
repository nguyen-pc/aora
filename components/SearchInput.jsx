import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyle,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="border-2 border-black-200 rounded-2xl flex-row focus:border-secondary items-center w-full h-16 px-4 bg-black-100 space-x-4">
      <TextInput
        className="text-base mt-0.5 font-pregular flex-1 text-white font-psemibold text-base"
        value={value}
        placeholder='Search for a video topic'
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />
      <TouchableOpacity>
        <Image source={icons.search} className='h-5 w-5' resizeMode='contain'/>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
