import { View, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const OrderPreparingScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 3000);
  }, []);

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        source={require("../../assets/Food-Delivery.gif")}
        className="w-full h-[360]"
        resizeMode="cover"
      />
    </View>
  );
};

export default OrderPreparingScreen;
