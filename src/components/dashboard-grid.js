import React, { Component } from 'react'
import './dashboard-grid.css'
import Spinner from './spinner'
import DashboardCell from './dashboard-cell'
import AmountChart from '../containers/amount-chart'
import ChanceChart from '../containers/chance-chart'
import TemperatureInput from '../containers/temperature-input'
import PressureInput from '../containers/pressure-input'

class DashboardGrid extends Component {
  componentDidMount() {
    this.props.getAmountOfRainfall()
  }

  render() {
    const { isLoading, amountOfRainfall, chances } = this.props

    return isLoading
      ? <Spinner />
      : <div className='dashboardGrid'>
          <DashboardCell>
            <TemperatureInput />
          </DashboardCell>
          <DashboardCell>
            <ChanceChart />
          </DashboardCell>
          <DashboardCell>
            <PressureInput />
          </DashboardCell>
          <DashboardCell>
            <AmountChart />
          </DashboardCell>
        </div>
  }
}

export default DashboardGrid;
