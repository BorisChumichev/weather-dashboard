import React, { Component } from 'react'
import 'rc-slider/assets/index.css';
import './slider-input.css';
import Rcslider from 'rc-slider'

class SliderInput extends Component {
  render() {
    return (
      <div className="sliderInput">
        <div className="sliderInput">{this.props.title}: {this.props.value}</div>
        <Rcslider {...this.props} step={1}/>
      </div>
    )
  }
}

export default SliderInput
