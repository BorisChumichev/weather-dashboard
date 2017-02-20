import React, { Component } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

export default React.createClass({
  render () {
    return (
      <LineChart width={500} height={300} data={this.props.data}>
       <XAxis dataKey="name"/>
       <YAxis domain={[0, 105]} />
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line isAnimationActive={false} type="monotone" dataKey="upperBound" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line isAnimationActive={false} type="monotone" dataKey="mean" stroke="#82ca9d" />
       <Line isAnimationActive={false} type="monotone" dataKey="lowerBound" stroke="#8884d8" activeDot={{r: 8}}/>
      </LineChart>
    );
  }
})
