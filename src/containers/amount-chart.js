import React, { Component } from 'react'
import { connect } from 'react-redux'
import AmountChart from '../components/amount-chart'

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.amountOfRainfall
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AmountChart)
