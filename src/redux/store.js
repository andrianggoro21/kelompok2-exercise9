import { configureStore } from "@reduxjs/toolkit";
import counterProduct from "./reducers";

export const store = configureStore({
    reducer: {
        product: counterProduct,
    }
})