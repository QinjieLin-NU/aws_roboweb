import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-streaming';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: '#18D2FF',
      borderColor: 'rgba(24, 210, 255, 0.3)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart2 = () => (
  <>
    <Line data={data} options={options} />
  </>
);

export default LineChart2;