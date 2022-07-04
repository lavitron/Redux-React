import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../redux/Product/product'
function Home() {
  //To make request
  const dispatch = useDispatch()
  // To pull data from state (initialstate) - state.ProductRecuder is come from store.js reducer
  const { products } = useSelector((state) => state.ProductRecuder)
  useEffect(() => {
    dispatch(productList())
  }, [dispatch])

  return (
    <div>
      {
        products?.map((item, key) => (
          <h2 key={key}>{item.name} {key}</h2>
        ))
      }
    </div>
  )
}

export default Home