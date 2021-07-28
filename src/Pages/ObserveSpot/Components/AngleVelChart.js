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
            fill: true,
            backgroundColor: '#18D2FF',
            borderColor: 'rgba(24, 210, 255)',
            cubicInterpolationMode: 'monotone',
        },
    ],
    
};


function AngleVelChart(props) {
    const [volume, setVolume] = React.useState(30);
    var ros;
    var jointstate_listener;
    var joint_data = [];
    var joint_label = [];

    const onRefresh = chart => {
        const now = Date.now();
        var i = 0;
        chart.data.datasets.forEach(dataset => {
            dataset.data.push({
            x: now,
            y: joint_data
            });
            i = i+1;
        });
      };
    
    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display:false,
                labels: {
                    color: "#BAC4E2",
                    font: {
                        size:10
                    }
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
                max : 2.,    
                min : -2.,
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
                    borderColor: "#BAC4E2"
                },
                realtime: {
                    duration: 20000,
                    refresh: 1000, //to short will cause mess
                    delay: 2000,
                    onRefresh: onRefresh
                }
            },
                // interaction: {
            // intersect: false
            // }
        },
    };

    useEffect(() => {
        ros = new ROSLIB.Ros({
            url: 'ws://192.168.10.68:9090'
        });

        jointstate_listener = new ROSLIB.Topic({
            ros : ros,
            name : '/cmd_vel',
            messageType : 'geometry_msgs/Twist',
            queue_length: 0,
            throttle_rate :2,
        });
        
        jointstate_listener.subscribe(function(message) {	
            console.log("got data from ros")
            joint_data = message.angular.z
        });

    }, []);

   return (
        <>
            <Line data={data} options={options}/>
        </>
    );
}
export default AngleVelChart;
