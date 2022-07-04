import { configureStore } from "@reduxjs/toolkit"
import ProductRecuder from "./Product/product"
const store = configureStore({
    reducer :{
        ProductRecuder
    },
})
export default store