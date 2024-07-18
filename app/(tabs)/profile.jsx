import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  RefreshControl,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { getUserPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";
import { useGlobalContext } from "../../context/GlobalProvider";

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: posts, refetch } = useAppwrite(() => getUserPosts(user.$id));

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <Text className="font-pmedium text-sm text-gray-100">
              Search Result
            </Text>
            <Text className="text-2xl font-pmedium text-white">
              {/* {query} */}
            </Text>
            <View className="mt-6 mb-8">
              {/* <SearchInput initialQuery={query} /> */}
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No videos found"
            subtitle="No video found for this search"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
