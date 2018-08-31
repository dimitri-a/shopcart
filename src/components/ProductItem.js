import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class ProductItem extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {

    const {item,actions} =this.props;
    return (
      <div>
        {item.name} {item.price} <button onClick={actions.addToCart(item.id)}>add to cart</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)
