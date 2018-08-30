import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class ProductList extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    const {products} = this.props;
    return (
      <ul>
        {products.map((p)=> {
          return <li>{p.name}</li>
        })}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  products : state.product
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
