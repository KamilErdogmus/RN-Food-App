import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  restaurant: null,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurantState = (state) => state.restaurant;

export const selectRestaurant = createSelector(
  [selectRestaurantState],
  (restaurantState) => restaurantState.restaurant
);

export default restaurantSlice.reducer;
