import { api } from "../configs/api"

export const getProductList = () => { return api.get('/Products?Pagination.Page=1&Pagination.Size=10') }