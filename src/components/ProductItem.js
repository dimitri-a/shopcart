import React from 'react'

export const ProductItem =(props) => {

  const {item} = props;
  return (
    <div>
     {item.name} {item.id} <button>add to cart</button>
    </div>
  )
}
