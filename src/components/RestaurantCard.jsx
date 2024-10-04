import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';
import {themeColors} from '../utils/theme';
import {useNavigation} from '@react-navigation/native';

const RestaurantCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Restaurant', {...item})}>
      <View
        style={{shadowColor: themeColors.bgColor(0, 2), shadowRadius: 7}}
        className="mr-6 bg-white rounded-3xl shadow-lg">
        <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-black  text-lg font-bold pt-2 ">
            {item.name}
          </Text>
          <View className="flex-row items-center space-x-1">
            <Icon.Star height={16} width={16} stroke="orange" fill="orange" />
            <Text className="text-xs">
              <Text className="text-green-700">{item.stars}</Text>
              <Text className="text-gray-700">
                ({item.reviews} review) &bull; &nbsp;
                <Text className="font-semibold text-black">
                  {item.category}
                </Text>
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin height={15} width={15} stroke="gray" />
            <Text className="text-gray-700 text-xs">
              Nearby &bull; {item.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCard;
