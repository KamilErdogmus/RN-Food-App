import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../utils/theme";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../store/slices/cartSlice";

const CartIcon = () => {
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  if (!cartItems.length) return;
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
        style={{ backgroundColor: themeColors.bgColor(1) }}
      >
        <View className="p-2 px-4 rounded-full bg-white/30">
          <Text className="text-white text-lg font-extrabold">
            {cartItems.length}
          </Text>
        </View>

        <Text className="text-white text-lg flex-1 text-center font-extrabold">
          View Cart
        </Text>
        <Text className="text-white text-lg flex-1 text-center font-extrabold">
          $ {cartTotal}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
