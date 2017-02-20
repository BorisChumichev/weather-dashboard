import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChanceChart from '../components/chance-chart'

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.chances
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChanceChart)
