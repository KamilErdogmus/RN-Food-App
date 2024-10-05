import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { themeColors } from "../utils/theme";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, restaurant }) => {
  return (
    <View>
      <View className="flex-row justify-between items-center border border-zinc-500/50 px-4 mx-2 bg-orange-100 rounded-xl ">
        <View>
          <Text className="text-black font-bold text-lg">
            {title}
          </Text>
          <Text className="text-black text-xs">
            {description}
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            className="font-semibold"
            style={{ color: themeColors.text }}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        className="overflow-visible py-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {restaurant.map((item) => (
          <RestaurantCard key={item._id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
