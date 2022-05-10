import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";

const initialCartVisibState = [{ visible: true }];
const initialProductState = { productsArray: [], initItemsArray: [
    { title: "Oranges", quantity: 3, price: 6, total: 18 },
    { title: "Potatoes", quantity: 7, price: 3, total: 21 },
  ] };

const cartVisibility = createSlice({
  name: "cartRed",
  initialState: initialCartVisibState,
  reducers: {
    changeVisibility(state) {
      state[0].visible = !state[0].visible;
    },
  },
});

const productSlice = createSlice({
  name: "prodRed",
  initialState: initialProductState,
  reducers: {
    getItems(state) {
      state.productsArray = state.initItemsArray;
    },
    addItemToProductsArray(state, action) {
      //por action.payload llega un objeto con 4 atrib: title, price, description y quantity
      const newItem = action.payload
      const existingItem = state.initItemsArray.find((item) => item.title === newItem.title)
      if (!existingItem) {
          state.initItemsArray = [newItem, ...state.initItemsArray]
          state.productsArray = state.initItemsArray
      } else {
          existingItem.quantity = existingItem.quantity + newItem.quantity
          state.productsArray = state.initItemsArray
      }
    },
  },
});

const store = configureStore({
  reducer: { cartRed: cartVisibility.reducer, prodRed: productSlice.reducer },
});

export const cartActions = cartVisibility.actions;
export const productActions = productSlice.actions;

export default store;
