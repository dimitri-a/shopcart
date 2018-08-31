import React from 'react'

export const ProductItem = (props) => {

  const { item, addToCart } = props;
  return (
    <div>
      {item.name} {item.id} <button onClick={()=>addToCart(item.id)}>add to cart</button>
    </div>
  )
}
