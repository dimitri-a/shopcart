import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {ProductList}     from '../components/ProductList'
import { bindActionCreators } from 'redux'
import * as CartActions from '../actions/index'

const mapStateToProps = (state) => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CartActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
