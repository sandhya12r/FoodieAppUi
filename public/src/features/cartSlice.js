import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: [],
    },
    reducers: {
        addCart: (state, action) => {
            state.value.unshift(action.payload);
        },
        addAllCart: (state, action) => {
            state.value.splice(0, state.value.length)
            state.value.unshift(...action.payload);
        },
    },
});

export const {addCart, addAllCart} = cartSlice.actions;
export const selectCart = (state) => state.cart.value;
export default cartSlice.reducer;