import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";
var LiveChart = require("create-react-class");

const data = {
  datasets: [
    {
      label: "Dataset 1",
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      lineTension: 0,
      borderDash: [8, 4],
      data: []
    }
  ]
};

const options = {
    type: 'line',               // only 'line' type is supported now
    data: {
        datasets: [{
            data: []            // empty at the beggining
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'realtime'    // x axis will auto-scroll from right to left
            }]
        },
        plugins: {
            streaming: {            // enabled by default
                duration: 20000,    // data in the past 20000 ms will be displayed
                refresh: 1000,      // onRefresh callback will be called every 1000 ms
                delay: 1000,        // delay of 1000 ms, so upcoming values are known before plotting a line

                // a callback to update datasets
                onRefresh: function(chart) {
                    data.datasets[0].data.push({
                        x: Date.now(),
                        y: Math.random() * 100
                    });
                }
            }
        }
    }
};
const a = 1;
export default LiveChart({
  displayName: "LineExample",
  render() {
    data.datasets[0].data.push({
        x: a+1,
        y: Math.random() * 100})
    return (
      <div>
        <Line data={data} options={options} />
      </div>
    );
  }
});