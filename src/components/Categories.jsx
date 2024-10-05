import {
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { getCategories } from "../../foodapp/api";
import { urlFor } from "../../foodapp/sanity";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <View className="mt-3">
      <ScrollView
        className="overflow-visible px-4"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((item) => {
          const isActive = item._id === activeCategory;
          return (
            <View
              key={item._id}
              className="flex justify-center items-center mr-6"
            >
              <TouchableOpacity
                className={`p-1 rounded-full shadow ${
                  isActive ? "bg-gray-600" : "bg-gray-200"
                }`}
                onPress={() => setActiveCategory(item._id)}
              >
                <Image
                  className="w-[45px] h-[45px]"
                  source={{ uri: urlFor(item.image).url() }}
                />
              </TouchableOpacity>
              <Text
                className={`text-sm mt-2 ${
                  isActive
                    ? "font-semibold text-gray-800"
                    : "text-gray-500"
                }`}
              >
                {item.title}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
