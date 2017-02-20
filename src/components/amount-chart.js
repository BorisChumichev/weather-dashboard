import React, { Component } from 'react'
import { merge, map } from 'ramda'

import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

export default React.createClass({
  render () {
    const addLabels = map(
        (obj, i) => merge(obj, { name: `Day: ${obj.day}` })
      )

    return (
      <BarChart width={500} height={300} data={addLabels(this.props.data)}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    );
  }
})

