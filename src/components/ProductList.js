import React from 'react'
import {ProductItem} from './ProductItem'

export const ProductList = (props) => {

  const { products } = props;

  return (
    <ul>
      
      {products.map( p => {
        return <ProductItem item={p}></ProductItem>
      })
      }
    </ul>
  )

}