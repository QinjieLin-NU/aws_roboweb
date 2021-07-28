import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-streaming';
import React, { useEffect, useState } from "react";
import { Button, Grid, Slider } from "@material-ui/core";
import { VolumeDown, VolumeUp } from "@material-ui/icons"
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Viewer, Grid as rosGrid, UrdfClient, PointCloud2, LaserScan,OccupancyGridClient } from 'ros3d';
import {COLLADA_LOADER_2} from 'three-collada-loader-2';
import ROSLIB from "roslib";

const data = {
    // labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: '# of Votes',
            data: [],
            fill: false,
            backgroundColor: '#18D2FF',
            borderColor: 'rgba(24, 210, 255, 0.3)',
        },
    ],
};

const onRefresh = chart => {
    const now = Date.now();
    chart.data.datasets.forEach(dataset => {
      dataset.data.push({
        x: now,
        y: Math.random() * 100
      });
    // data.datasets[0].data[0] = 2;
    });
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
            // realtime: {
            //     duration: 200,
            //     refresh: 100,
            //     delay: 200,
            //     onRefresh: onRefresh
            // }
        },
    },
};


const config = {
    type: 'line',
    data: {
      datasets: [
        {
          data: []
        },
        {
          data: []
        }
      ]
    },
    options: {
      scales: {
        x: {
          type: 'realtime'
        }
      }
    }
  };

function AngleChart(props) {
    const [volume, setVolume] = React.useState(30);
    var ros;
    var jointstate_listener;
    var joint_data;

    useEffect(() => {
        ros = new ROSLIB.Ros({
            url: 'ws://192.168.10.68:9090'
        });

        jointstate_listener = new ROSLIB.Topic({
            ros : ros,
            name : '/joint_states',
            messageType : 'sensor_msgs/JointState',
            queue_length: 0,
            throttle_rate :2,
        });
        
        jointstate_listener.subscribe(function(message) {	
            console.log("got data from ros")
        });

    }, []);

   return (
        <>
            {/* <Line data={data} options={options}/> */}
            <Line config={config}/>
        </>
    );
}


// class AngleChart extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             plot_data: data
//         };
//         this.data = data;
//         var joint_data;

//         this.ros = new ROSLIB.Ros({
//             url: 'ws://192.168.10.68:9090'
//         });

//         this.jointstate_listener = new ROSLIB.Topic({
//             ros : this.ros,
//             name : '/joint_states',
//             messageType : 'sensor_msgs/JointState',
//             queue_length: 0,
//             throttle_rate :2,
//         });
        
//         this.jointstate_listener.subscribe(function(message) {	
//             joint_data = message.position
//             console.log("get data from ros")
//         });

//     }

    
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//             );
//     }
//     tick() {
//         this.setState({
//             plot_data: this.data
//         });
//         console.log(this.data.labels)
//       }

//     render() {
//         return (
//             <>
//                 <Line data={this.state.plot_data} options={options} />
//             </>
//         );
//     }
// }

export default AngleChart;