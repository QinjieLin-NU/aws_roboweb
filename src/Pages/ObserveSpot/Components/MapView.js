import React, { useEffect, useState } from "react";
import { Button, Grid, Slider } from "@material-ui/core";
import { VolumeDown, VolumeUp } from "@material-ui/icons"
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Viewer, Grid as rosGrid, UrdfClient, PointCloud2, LaserScan,OccupancyGridClient } from 'ros3d';
import {COLLADA_LOADER_2} from 'three-collada-loader-2';
import ROSLIB from "roslib";




const useStyles = makeStyles((theme) => ({
}));


function MapView(props) {
    const classes = useStyles();
    const [volume, setVolume] = React.useState(30);
    var ros;


    useEffect(() => {
        ros = new ROSLIB.Ros({
            url: 'ws://192.168.10.68:9090'
        });


        // Create the main viewer.
        var viewer = new Viewer({
            divID: 'map-view',
            width: '600',
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
            fixedFrame: '/odom'//'/base_footprint'//'/odom'
        });

        // Setup the URDF client.
        var urdfClient = new UrdfClient({
            ros : ros,
            tfClient : tfClient,
            path : 'http://192.168.10.68:9094/',
            rootObject : viewer.scene,
            loader : COLLADA_LOADER_2
        });

        // // Setup the URDF client.
        // var urdfClient = new UrdfClient({
        //     ros : ros,
        //     tfClient : tfClient,
        //     path : 'http://192.168.10.68:9094/',
        //     rootObject : viewer.scene,
        //     loader : COLLADA_LOADER_2
        // });

        // Setup the map client.
        var map_gridClient = new OccupancyGridClient({
            ros : ros,
            rootObject : viewer.scene,
            topic: '/move_base/global_costmap/costmap', //'/map',
            tfClient: tfClient,
            color: {r:112,g:128,b:144}
        });
        // Scale the canvas to fit to the map
        map_gridClient.on('change', function(){
        });


    }, []);

    return (
        <>
        <div id="map-view"></div>
        </>
    );
}

export default MapView;


