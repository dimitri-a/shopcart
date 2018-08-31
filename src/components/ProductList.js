import React from 'react'
import ProductItem from '../components/ProductItem'
export const ProductList = (props) => {

  const { products } = props;

  return (
    <ul>
      {products.map((p) => {
       <ProductItem item={p}></ProductItem>
      })}
    </ul>
  )

}