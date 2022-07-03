import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import ProductRecuder from "./Product/product"
const reducer = combineReducers({
    ProductRecuder
})
const store = configureStore({
    reducer
})
export default store