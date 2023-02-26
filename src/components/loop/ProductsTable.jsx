import React from "react";
import products from "../../data/Products";
import "./ProductsTable.css"

const ProductsTable = props => {
  const productsLines = products.map((product, index) => {
    return (
      <tr key={ product.id } className={index % 2 !== 0 ? 'Odd' : 'Pair'}>
        <td>{ product.id }</td>
        <td>{ product.name }</td>
        <td>R${ product.price.toFixed(2).replace('.',',') }</td>
      </tr>
    )
  })
  return (
    <div className="ProductsTable">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          { productsLines }
        </tbody>
      </table>
    </div>
  )
}

export default ProductsTable