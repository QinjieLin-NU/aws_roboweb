import { Line, Chart } from 'react-chartjs-2';
import 'chartjs-adapter-luxon';
import StreamingPlugin from 'chartjs-plugin-streaming';
import 'chartjs-plugin-streaming';
import React, { useEffect, useState } from "react";
import { Button, Grid, Slider } from "@material-ui/core";
import { VolumeDown, VolumeUp } from "@material-ui/icons"
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Viewer, Grid as rosGrid, UrdfClient, PointCloud2, LaserScan,OccupancyGridClient } from 'ros3d';
import {COLLADA_LOADER_2} from 'three-collada-loader-2';
import ROSLIB from "roslib";
import { Component } from 'react';

Chart.register(StreamingPlugin);

const data = {
    datasets: [
        {
            label: '',
            data: [],
            fill: false,
            backgroundColor: '#18D2FF',
            borderColor: 'rgba(24, 210, 255, 0.3)',
        },
        // {
        //     label: '',
        //     data: [],
        //     fill: false,
        //     backgroundColor: '#FFD218',
        //     borderColor: 'rgba(255, 210, 24, 0.3)',
        // },  
        // {
        //     label: '',
        //     data: [],
        //     fill: false,
        //     backgroundColor: '#18DD18',
        //     borderColor: 'rgba(24, 255, 24, 0.3)',
        // }, 
    ],
    
};


function AngleChart_right_finger(props) {
    const [volume, setVolume] = React.useState(30);
    var ros;
    var jointstate_listener;
    var joint_data = [];
    var joint_label = [];

    const onRefresh = chart => {
        const now = Date.now();
        var i = 7;
        chart.data.datasets.forEach(dataset => {
            dataset.data.push({
            x: now,
            y: joint_data[i]
            });
            dataset.label = joint_label[i]
            // i = i+3;
        });
      };
    
    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display:true,
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
                    textStrokeColor: "#BAC4E2",
                },
                grid: {
                    tickColor: "#BAC4E2",
                    color: "#000000",
                    borderColor: "#BAC4E2"
                },
                max : 0.04,    
                min : -0.04,
            },
            x: {
                type: 'realtime',
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
                realtime: {
                    duration: 20000,
                    refresh: 100,
                    delay: 2000,
                    onRefresh: onRefresh
                }
            },
        },
    };

    useEffect(() => {
        ros = new ROSLIB.Ros({
            url: 'ws://192.168.50.4:9090'
        });

        jointstate_listener = new ROSLIB.Topic({
            ros : ros,
            // name : '/joint_states',
            name : '/wx200/joint_states',
            messageType : 'sensor_msgs/JointState',
            queue_length: 0,
            throttle_rate :2,
        });
        
        jointstate_listener.subscribe(function(message) {    
            console.log("got data from ros")
            joint_data = message.position
            joint_label = message.name
        });

    }, []);

   return (
        <>
            <Line data={data} options={options}/>
        </>
    );
}
export default AngleChart_right_finger;
