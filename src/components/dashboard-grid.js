import React, { Component } from 'react'
import './dashboard-grid.css'
import Spinner from './spinner'
import TemperatureInput from '../containers/temperature-input'
import PressureInput from '../containers/pressure-input'

class DashboardGrid extends Component {
  componentDidMount() {
    this.props.getAmountOfRainfall()
  }

  render() {
    const { isLoading } = this.props

    return isLoading
      ? <Spinner />
      : <div className='dashboardGrid'>
          <TemperatureInput />
          <PressureInput />
        </div>
  }
}

export default DashboardGrid;
