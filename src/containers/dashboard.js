import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAmountOfRainfall } from '../actions/dashboard'
import DashboardGrid from '../components/dashboard-grid'

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: state.isLoading,
    amountOfRainfall: state.amountOfRainfall
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAmountOfRainfall: () => dispatch(getAmountOfRainfall())
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DashboardGrid)
