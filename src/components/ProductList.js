import React from 'react'

export const ProductList = (props) => {

  const { products } = props;

  debugger

  return (
    <ul>
      {products.map((p) => {
        return <li>{p.name}</li>
      })}
    </ul>
  )

}