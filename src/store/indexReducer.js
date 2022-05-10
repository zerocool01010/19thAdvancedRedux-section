import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";

const initialCartVisibState = [{ visible: true }];
const initialProductState = { productsArray: [] };
let testArray = [
  { title: "Oranges", quantity: 3, price: 6, total: 18 },
  { title: "Potatoes", quantity: 7, price: 3, total: 21 },
];

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
      state.productsArray = testArray;
    },
    addItemToProductsArray(state, action) {
      //por action.payload llega un objeto con 4 atrib: title, price, description y quantity
      let itemRepeats = false;
      let index = 0
      for (const obj of testArray) {
          index++
        if (action.payload.title === obj.title) {
        let newObj = {
            ...obj,
            quantity: obj.quantity + action.payload.quantity
        }
        console.log(newObj)
        testArray.splice(index, 1, newObj) //reemplazo en el indice-position del array (1er arg) 1 elemento-objeto (2do arg) por el newObj (3er arg)
        console.log(testArray)
        /* state.productsArray = testArray;
        itemRepeats = true; */
        break;
        }
      }

      if (!itemRepeats) {
        testArray = [...testArray, action.payload];
        state.productsArray = testArray;
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
