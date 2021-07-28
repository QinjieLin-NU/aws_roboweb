import React, { useEffect, useState } from "react";
import { Button, Grid, Slider } from "@material-ui/core";
import { VolumeDown, VolumeUp } from "@material-ui/icons"
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Viewer, Grid as rosGrid, UrdfClient, PointCloud2, LaserScan } from 'ros3d';
import {COLLADA_LOADER_2} from 'three-collada-loader-2';
import ROSLIB from "roslib";




const useStyles = makeStyles((theme) => ({
}));


function LidarView(props) {
    const classes = useStyles();
    const [volume, setVolume] = React.useState(30);
    var ros;


    useEffect(() => {
        ros = new ROSLIB.Ros({
            url: 'ws://192.168.10.68:9090'
        });


        // Create the main viewer.
        var viewer = new Viewer({
            divID: 'lidar-view',
            width: '500',
            height: '375',
            antialias: true
        });

        // Add a grid.
        // viewer.addObject(new rosGrid());

        // ros.on('connection', function () {
        //     document.getElementById("status").innerHTML = "Connected";
        // });

        // ros.on('error', function (error) {
        //     document.getElementById("status").innerHTML = "Error";
        // });

        // ros.on('close', function () {
        //     document.getElementById("status").innerHTML = "Closed";
        // });

        // Setup a client to listen to robot model TFs.
        var tfClient = new ROSLIB.TFClient({
            ros : ros,
            angularThres : 0.01,
            transThres : 0.01,
            rate : 10.0,
            fixedFrame: '/base_link'//'/base_footprint'//'/odom'
        });

        var scanclient = new LaserScan({
            ros: ros,
            topic: '/scan',
            tfClient: tfClient,
            rootObject: viewer.scene,
            material: { size: 0.4, color: 0x18D2FF },
            max_pts: 1000,
        });

            // Setup the URDF client.
        var urdfClient = new UrdfClient({
            ros : ros,
            tfClient : tfClient,
            path : 'http://192.168.10.68:9094/',
            rootObject : viewer.scene,
            loader : COLLADA_LOADER_2
        });

    }, []);

    return (
        <>
        <div id="lidar-view"></div>
        </>
    );
}

export default LidarView;


