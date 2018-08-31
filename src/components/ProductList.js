import React from 'react'
import {ProductItem} from './ProductItem'

export const ProductList = (props) => {

  const { products ,actions} = props;

  return (
    <ul>
      
      {products.map( p => {
        return <ProductItem item={p} addToCart={actions.addToCart}></ProductItem>
      })
      }
    </ul>
  )

}