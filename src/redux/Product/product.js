import { createSlice } from "@reduxjs/toolkit"
import { getProductList } from "../../services/ProductService"

//reducers
const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: []
    },
    reducers: {
        getProducts: (state, action) => {
            state.products = action.payload.paginationList
        }
    }
})

export default productSlice.reducer
//actions
const { getProducts } = productSlice.actions

export const productList = () => async dispatch => {
    try {
        await getProductList().then((response) => { dispatch(getProducts(response.data)) })
    }
    catch (e) {
        return console.log(e.message)
    }
}