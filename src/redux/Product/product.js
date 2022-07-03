import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getProductList } from "../../services/ProductService"


export const getProducts = createAsyncThunk('', async () => {
    console.log("AsyncThunk")
    return getProductList().then((res) => res.data);
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        productList: []
    },
    extraReducers: {
        [getProducts.fulfilled]: (state, action) => {
            state.productList = action.payload.paginationList
        }
    }
}
)



export default productSlice.reducer

// //actions
// const { getProducts } = productSlice.actions

// export const products = () => async dispatch => {
//     try {
//         await getProductList().then((response) => { console.log("Products", response); dispatch(getProducts(response.data)) })
//     }
//     catch (e) {
//         return console.log(e.message)
//     }
// }