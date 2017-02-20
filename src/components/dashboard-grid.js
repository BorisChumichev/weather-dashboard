import React, { Component } from 'react'
import './dashboard-grid.css'
import Spinner from './spinner'
import DashboardCell from './dashboard-cell'
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
          <DashboardCell>
            <TemperatureInput />
          </DashboardCell>
          <DashboardCell>
            <PressureInput />
          </DashboardCell>
        </div>
  }
}

export default DashboardGrid;
