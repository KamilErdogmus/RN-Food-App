import React from "react";
import { Alert, Image, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { themeColors } from "../utils/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../store/slices/restaurantSlice";
import { clearCart } from "../store/slices/cartSlice";

const DeliveryScreen = () => {
  const rest = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const cancelOrder = () => {
    Alert.alert(
      "",
      "Your order has been successfully canceled.",
      [
        {
          text: "OK",
          onPress: () => {
            dispatch(clearCart());
            setTimeout(() => {
              navigation.navigate("Home");
            }, 500);
          },
        },
      ]
    );
  };

  return (
    <View className="flex-1">
      <MapView
        zoomEnabled={true}
        scrollDuringRotateOrZoomEnabled
        scrollEnabled
        zoomTapEnabled
        initialRegion={{
          latitude: rest.lat,
          longitude: rest.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: rest.lat,
            longitude: rest.lng,
          }}
          title={rest.name}
          description={rest.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>

      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20-30 Minutes
            </Text>
            <Text className="text-gray-700 mt-2 font-semibold">
              Your order is own it's way!
            </Text>
          </View>
          <Image
            className="w-40 h-28"
            resizeMode="stretch"
            source={require("../../assets/delivery-boy.gif")}
          />
        </View>

        <View
          style={{ backgroundColor: themeColors.bgColor(0.75) }}
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
        >
          <View className="p-1 rounded-full bg-white/40">
            <Image
              className="h-16 w-16 rounded-full"
              source={require("../../assets/delivery-guy.jpeg")}
            />
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-white font-bold text-lg">
              Tobey Maguire
            </Text>
            <Text className="text-white font-semibold">
              Your Rider
            </Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Icon.Phone
                strokeWidth={1}
                stroke={themeColors.bgColor(1)}
                fill={themeColors.bgColor(1)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancelOrder}
              className="bg-white p-2 rounded-full"
            >
              <Icon.X strokeWidth={5} stroke={"red"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
