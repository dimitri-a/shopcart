import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {ProductList}     from '../components/ProductList'

const mapStateToProps = (state) => ({
  products: state.products
})


const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
