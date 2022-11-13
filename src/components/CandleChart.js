import React, { Component } from "react";
import Chart from "react-google-charts";
const data = [
  ['day', 'a', 'b', 'c', 'd']
];

const datas =   [['Mon', 20, 28, 38, 45],
['Tue', 31, 38, 55, 66],
['Wed', 50, 55, 77, 80],
['Thu', 77, 77, 66, 50],
['Fri', 68, 66, 22, 15]]

for (var i=0; i<20; i++){
  data.push(datas[i%5]);
}


class GoogleChart extends Component {
  
  constructor(props) {
    super(props)
  }

  render() {
      return (
          <div className="container mt-5" align="left">
              <h2 className="card">S&P 500</h2>
              <Chart
                className="card"
                width={'100%'}
                height={'100%'}
                chartType="CandlestickChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                  legend: 'none',
                }}
                rootProps={{ 'data-testid': '1' }}
              />             
          </div>                  
      )
  }
}
export default GoogleChart;