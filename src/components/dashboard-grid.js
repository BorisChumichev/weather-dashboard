import React, { Component } from 'react'
import './dashboard-grid.css'
import Spinner from './spinner'

class DashboardGrid extends Component {
  componentDidMount() {
    this.props.getAmountOfRainfall()
  }

  render() {
    const { isLoading } = this.props

    return (
      <div className='dashboardGrid'>
        {isLoading
          ? <Spinner />
          : <div></div>
        }
      </div>
    )
  }
}

export default DashboardGrid;
