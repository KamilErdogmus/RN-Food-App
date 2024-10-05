import {
  View,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import { themeColors } from "../utils/theme";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { getFeaturedRestaurants } from "../../foodapp/api";

const HomeScreen = () => {
  const [featuredRestaurants, setFeaturedRestaurants] = useState(
    []
  );

  useEffect(() => {
    getFeaturedRestaurants().then((data) => {
      setFeaturedRestaurants(data);
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1">
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={"white"}
      />

      <View className="flex-row items-center space-x-2 px-4 py-2 bg-orange-200/50 ">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height={25} width={25} stroke="gray" />
          <TextInput
            placeholder="Restaurants"
            className="ml-2 flex-1"
          />
          <View className="flex-row items-center space-x-1 border-0 pl-1 border-l-2 border-gray-300">
            <Icon.MapPin height={25} width={25} stroke="gray" />
            <Text className="text-black">New York,NYC</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <Icon.Sliders
            height={20}
            width={25}
            stroke="white"
            strokeWidth={2.5}
          />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <Categories />

        <View className="mt-5">
          {featuredRestaurants.map((item) => (
            <FeaturedRow
              key={item._id}
              title={item.name}
              description={item.description}
              restaurant={item.restaurants}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
