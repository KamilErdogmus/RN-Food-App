import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import * as Icon from "react-native-feather";
import {
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { themeColors } from "../utils/theme";
import DishRow from "../components/DishRow";
import CartIcon from "../components/CartIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../store/slices/restaurantSlice";
import { urlFor } from "../../foodapp/sanity";

const RestaurantScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { params } = useRoute();
  let item = params;

  useEffect(() => {
    if (item && item._id) {
      dispatch(setRestaurant({ ...item }));
    }
  }, [item]);

  return (
    <View className="flex-1 bg-white">
      <CartIcon />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ScrollView>
        <View className="relative shadow-sm">
          <Image
            className="w-full h-72"
            source={{ uri: urlFor(item.image).url() }}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-10 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft
              height={25}
              width={25}
              stroke={themeColors.bgColor(1)}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
          }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-black font-bold text-3xl">
              {item.title}
            </Text>
            <View className="flex-row space-x-2 my-1">
              <Icon.Star
                height={16}
                width={16}
                stroke="orange"
                fill="orange"
              />
              <Text className="text-xs">
                <Text className="text-green-700">
                  {item.stars}
                </Text>
                <Text className="text-gray-700">
                  ({item.reviews} review) &bull; &nbsp;
                  <Text className="font-semibold text-black">
                    {item.type.title}
                  </Text>
                </Text>
              </Text>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin
                  height={15}
                  width={15}
                  stroke="gray"
                />
                <Text className="text-gray-700 text-xs">
                  Nearby &bull; {item.address}
                </Text>
              </View>
            </View>
            <Text className="px-5 mt-2 text-black">
              {item.description}
            </Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold text-black">
            Menu
          </Text>
          {item.dishes.map((dish, index) => (
            <DishRow item={dish} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;
