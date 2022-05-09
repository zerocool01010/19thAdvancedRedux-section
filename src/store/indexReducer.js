import { createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { configure } from '@testing-library/react';

const initialSomeState = [{some: true}]
const initialSomeState2 = [{some2: false}]

const someSlice = createSlice({
    name: 'someRed',
    initialState: initialSomeState,
    reducers: {
        increment(state) {
            state.some++
        }
    }
})

const someSlice2 = createSlice({
    name: 'someRed2',
    initialState: initialSomeState2,
    reducers: {
        increment(state) {
            state.some2++
        }
    }
})

const store = configureStore({
    reducer: { someRed: someSlice.reducer, someRed2: someSlice2.reducer }
})

export const someSliceActions = someSlice.actions
export const someSlice2Actions = someSlice2.actions 

export default store