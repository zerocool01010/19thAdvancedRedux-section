import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";

const initialCartVisibState = [{ visible: true }];
const initialProductState = { productsArray: [], testArray: [
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
      state.productsArray = state.testArray;
    },
    addItemToProductsArray(state, action) {
      //por action.payload llega un objeto con 4 atrib: title, price, description y quantity
      let itemRepeats = false;
      let index = 0
      for (const obj of state.testArray) {
          index++
        if (action.payload.title === obj.title) {
        const newItem = {...action.payload}
        newItem.quantity = obj.quantity+action.payload.quantity
        state.testArray = [...state.testArray, newItem]
        console.log(state.testArray)
        state.productsArray = state.testArray;
        itemRepeats = true;
        break;
        }
      }

      if (!itemRepeats) {
        state.testArray = [...state.testArray, action.payload];
        state.productsArray = state.testArray;
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
