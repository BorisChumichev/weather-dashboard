import React, { Component } from 'react'

import './spinner.css'

class Spinner extends Component {
  render() {
    return (
      <div className="spinner">
        <img className="spinner-rings" src="/rings.svg" />
      </div>
    )
  }
}

export default Spinner
