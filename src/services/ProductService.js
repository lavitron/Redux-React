import { api } from "../configs/api"

export const getProductList = () => { return api.get('/Products') }