import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setNumericValue } from '../actions/dashboard'
import SliderInput from '../components/slider-input'

const mapStateToProps = (state, ownProps) => {
  return {
    title: 'Temperature [˚C]',
    min: 10,
    max: 35,
    value: state.temperature
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: value =>
      dispatch(setNumericValue('temperature', value))
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SliderInput)
