import { createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { configure } from '@testing-library/react';

const initialCartVisibState = [{visible: true}]
/* const initialSomeState2 = [{some2: false}] */

const cartVisibility = createSlice({
    name: 'cartRed',
    initialState: initialCartVisibState,
    reducers: {
        changeVisibility(state) {
            state[0].visible = !(state[0].visible)
        }
    }
})

/* const someSlice2 = createSlice({
    name: 'someRed2',
    initialState: initialSomeState2,
    reducers: {
        someMethod2(state) {
            state.some2 = true
        }
    }
}) */

const store = configureStore({
    reducer: { cartRed: cartVisibility.reducer/* , someRed2: someSlice2.reducer */ }
})

export const cartActions = cartVisibility.actions
/* export const someSlice2Actions = someSlice2.actions  */

export default store