import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAmountOfRainfall } from '../actions/dashboard'

const mapStateToProps = (state, ownProps) => {
  return {
    amountOfRainfall: state.amountOfRainfall
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAmountOfRainfall: () => dispatch(getAmountOfRainfall())
  }
}

class App extends Component {
  componentDidMount() {
    this.props.getAmountOfRainfall()
  }

  render() {
    return (
      <div onClick={() => this.props.getAmountOfRainfall()}>
        {JSON.stringify(this.props.amountOfRainfall)}
      </div>
    )
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
