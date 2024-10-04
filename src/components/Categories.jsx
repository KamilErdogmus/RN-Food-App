import {ScrollView, Text, TouchableOpacity, Image, View} from 'react-native';
import React, {useState} from 'react';
import {categories} from '../utils/constants';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View>
      <ScrollView
        className="overflow-visible px-4"
        horizontal
        showsHorizontalScrollIndicator={false}>
        {categories.map(item => {
          const isActive = item.id === activeCategory;
          return (
            <View
              key={item.id}
              className="flex justify-center items-center mr-6">
              <TouchableOpacity
                className={`p-1 rounded-full shadow ${
                  isActive ? 'bg-gray-600' : 'bg-gray-200'
                }`}
                onPress={() => setActiveCategory(item.id)}>
                <Image className="w-[45px] h-[45px]" source={item.image} />
              </TouchableOpacity>
              <Text
                className={`text-sm mt-2 ${
                  isActive ? 'font-semibold text-gray-800' : 'text-gray-500'
                }`}>
                {item.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
