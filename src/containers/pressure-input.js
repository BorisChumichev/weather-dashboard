import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setNumericValue } from '../actions/dashboard'
import SliderInput from '../components/slider-input'

const mapStateToProps = (state, ownProps) => {
  return {
    title: 'Pressure [hPa]',
    min: 970,
    max: 1030,
    value: state.pressure
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: value =>
      dispatch(setNumericValue('pressure', value))
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SliderInput)
