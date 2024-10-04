import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {themeColors} from '../utils/theme';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({title, description, restaurant = []}) => {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="text-black font-bold text-lg">{title}</Text>
          <Text className="text-black text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text className="font-semibold" style={{color: themeColors.text}}>
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        className="overflow-visible py-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {restaurant.map(item => (
          <RestaurantCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
