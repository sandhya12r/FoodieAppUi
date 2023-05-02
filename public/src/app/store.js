import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/dishSlice";
import cartReducer from "../features/cartSlice";


export default configureStore({
    reducer: {
        post: postReducer,
        cart: cartReducer,
    },
})