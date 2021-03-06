import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";

const initialCartVisibState = [{ visible: true }];
const initialProductState = {
  productsArray: [],
  initItemsArray: [
    { title: "Oranges", quantity: 3, price: 6 },
    { title: "Potatoes", quantity: 7, price: 3 },
  ],
  shoppingCartItemsQuant: 2,
};

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
      const existingItem = state.initItemsArray.find(
        (item) => item.title === action.payload.title
      );
      if (!existingItem) {
        state.initItemsArray = [action.payload, ...state.initItemsArray]; //con este metodo o el .push() funciona
        state.productsArray = state.initItemsArray;
      } else {
        existingItem.quantity = existingItem.quantity + action.payload.quantity;
        state.productsArray = state.initItemsArray;
      }
    },
    plusMinusItem(state, action) {
      const existingItem = state.initItemsArray.find(
        (item) => item.title === action.payload.title
      );
      const existingItemIndex = state.initItemsArray.indexOf(existingItem);

      if (existingItem.quantity >= 1) {
        existingItem.quantity = existingItem.quantity + action.payload.mathSymb;
      } else {
        if (action.payload.mathSymb === 1) {
          existingItem.quantity =
            existingItem.quantity + action.payload.mathSymb;
        } else {
          state.initItemsArray.splice(existingItemIndex, 1);
        }
      }
      state.productsArray = state.initItemsArray;
    },
    getLength(state) {
      state.shoppingCartItemsQuant = state.initItemsArray.length;
    },
  },
});

const store = configureStore({
  reducer: { cartRed: cartVisibility.reducer, prodRed: productSlice.reducer },
});

export const cartActions = cartVisibility.actions;
export const productActions = productSlice.actions;

export default store;
