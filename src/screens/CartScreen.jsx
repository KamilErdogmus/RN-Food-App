import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../utils/theme";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../store/slices/restaurantSlice";
import {
  clearCart,
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "../store/slices/cartSlice";
import { urlFor } from "../../foodapp/sanity";

const CartScreen = () => {
  const [groupedItems, setGroupedItems] = useState({});
  const navigation = useNavigation();
  const rest = useSelector(selectRestaurant);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const dispatch = useDispatch();

  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(items);
  }, [cartItems, cartTotal]);

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle={"dark-content"} hidden />
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="absolute top-5 left-4 bg-gray-50 p-2 z-10 rounded-full shadow"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-black text-center font-bold text-xl">
            Your Cart
          </Text>
          <Text className="text-gray-500 text-center">
            {rest?.title}
          </Text>
        </View>
      </View>

      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center"
      >
        <Image
          className="h-20 w-20 rounded-full"
          source={require("../../assets/delivery.png")}
        />
        <Text className="text-black flex-1 pl-4">
          Delivery in 20-30 minutes
        </Text>
        <TouchableOpacity
          onPress={() => [
            dispatch(clearCart()),
            Alert.alert("", "Cart has been cleared."),
          ]}
        >
          <Text
            style={{ color: themeColors.text }}
            className="font-bold"
          >
            Clear Cart
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        className="bg-white pt-5"
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        {Object.entries(groupedItems).length === 0 ? (
          <Text className="text-center text-gray-500">
            No items in the cart.
          </Text>
        ) : (
          Object.entries(groupedItems).map(([key, items]) => (
            <View key={key} className="bg-white ">
              {items.map((dish) => (
                <View
                  key={dish._id}
                  className="flex-row items-center space-x-3 py-2 px-4 border border-gray-400 mx-2 mb-3 shadow-lg rounded-3xl "
                >
                  <Text
                    className="font-bold w-8"
                    style={{ color: themeColors.text }}
                  >
                    {dish.quantity} x
                  </Text>
                  <Image
                    className="h-16 w-16 rounded-full"
                    source={{ uri: urlFor(dish.image).url() }}
                  />
                  <Text className="text-gray-700 flex-1">
                    {dish.title}
                  </Text>
                  <Text className="text-green-500 text-base font-semibold">
                    ${dish.price}
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      dish &&
                      dish._id &&
                      dispatch(removeFromCart({ id: dish._id }))
                    }
                    style={{
                      backgroundColor: themeColors.bgColor(1),
                    }}
                    className="p-1 rounded-full"
                  >
                    <Icon.Minus
                      height={20}
                      width={20}
                      strokeWidth={2}
                      stroke="white"
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ))
        )}
      </ScrollView>

      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="py-6 rounded-t-3xl px-8 space-y-4"
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-green-700">${cartTotal}</Text>
        </View>
        <View
          className={`flex-row justify-between ${
            cartItems.length === 0 && "hidden"
          }`}
        >
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-green-700">$2</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">
            Order Total
          </Text>
          <Text className="text-green-700 font-extrabold">
            ${cartTotal + (!cartItems.length ? 0 : 2)}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            disabled={!cartItems.length}
            onPress={() => navigation.navigate("OrderPreparing")}
            style={{
              backgroundColor: !cartItems.length
                ? themeColors.bgColor(0.25)
                : themeColors.bgColor(1),
            }}
            className="p-3 rounded-full"
          >
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
