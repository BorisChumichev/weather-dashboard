import React, { Component } from 'react'
import './dashboard-cell.css'

class DashboardCell extends Component {
  render() {
    return (
      <div className='dashboardCell'>
        {this.props.children}
      </div>
    )
  }
}

export default DashboardCell
