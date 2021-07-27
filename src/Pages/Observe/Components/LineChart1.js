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
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display:false,
            labels: {
                color: "#BAC4E2"
            },
            title: {
                color: "#BAC4E2"
            }
        }
    },
    scales: {

        y: {
            ticks: {
                beginAtZero: true,
                color: "#BAC4E2",
                textStrokeColor: "#BAC4E2"
            },
            grid: {
                tickColor: "#BAC4E2",
                color: "#000000",
                borderColor: "#BAC4E2"
            },
        },
        x: {
            ticks: {
                beginAtZero: true,
                color: "#BAC4E2",
                textStrokeColor: "#BAC4E2"
            },
            grid: {
                tickColor: "#BAC4E2",
                //            color:"#000000",
                borderColor: "#BAC4E2"
            },
        },
    },
};

const LineChart1 = () => (
    <>
        <Line data={data} options={options} />
    </>
);

export default LineChart1;