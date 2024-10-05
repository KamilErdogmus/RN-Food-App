import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { themeColors } from "../utils/theme";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemById,
} from "../store/slices/cartSlice";
import { urlFor } from "../../foodapp/sanity";

const DishRow = ({ item }) => {
  const dispatch = useDispatch();
  const totalItems = useSelector((state) =>
    selectCartItemById(state, item._id)
  );

  const handleIncrease = () => {
    dispatch(addToCart({ ...item }));
  };

  const handleDecrease = () => {
    dispatch(removeFromCart({ id: item._id }));
  };

  const quantityInCart = totalItems.length
    ? totalItems[0].quantity
    : 0;

  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl mb-3 mx-2">
      <Image
        source={{ uri: urlFor(item.image).url() }}
        className="w-28 h-28 rounded-xl"
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-black text-2xl">
            {item.title}
          </Text>
          <Text className="text-gray-700">
            {item.description}
          </Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-green-700 text-lg font-bold">
            $ {item.price}
          </Text>
          <View className="flex-row items-center gap-2">
            <TouchableOpacity
              onPress={handleDecrease}
              disabled={quantityInCart === 0}
              className="p-1 rounded-full"
              style={{
                backgroundColor:
                  quantityInCart === 0
                    ? themeColors.bgColor(0.25)
                    : themeColors.bgColor(1),
              }}
            >
              <Icon.Minus
                height={20}
                width={20}
                strokeWidth={2}
                stroke="white"
              />
            </TouchableOpacity>
            <Text className="text-black text-lg">
              {quantityInCart}
            </Text>
            <TouchableOpacity
              onPress={handleIncrease}
              className="p-1 rounded-full"
              style={{
                backgroundColor: themeColors.bgColor(1),
              }}
            >
              <Icon.Plus
                height={20}
                width={20}
                strokeWidth={2}
                stroke="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;
