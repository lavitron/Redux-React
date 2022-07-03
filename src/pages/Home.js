import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/Product/product'
function Home() {

  const dispatch = useDispatch()
  //bu productlist neyin productlisti
  //usesellactor anlamadım ben
  const {productList} = useSelector((state) => state.ProductRecuder)
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  
  return (
    <div>
      {
        productList?.map((item,key) => (
          <h2 key={key}>{item.name}</h2>
        ))
      }
    </div>
  )
}

export default Home