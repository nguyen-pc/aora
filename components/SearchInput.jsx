import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import { router, usePathname } from "expo-router";

const SearchInput = ({initialQuery}) => {
  const pathName = usePathname();
  const [query, setQuery] = useState(initialQuery||"");
  return (
    <View className="border-2 border-black-200 rounded-2xl flex-row focus:border-secondary items-center w-full h-16 px-4 bg-black-100 space-x-4">
      <TextInput
        className="text-base mt-0.5 font-pregular flex-1 text-white font-psemibold text-base"
        value={query}
        placeholder="Search a video topic"
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      />
      <TouchableOpacity
        onPress={() => {
          if (query === "")
            return Alert.alert(
              "Missing Query",
              "Please input something to search results across database"
            );

          if (pathName.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Image source={icons.search} className="h-5 w-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
