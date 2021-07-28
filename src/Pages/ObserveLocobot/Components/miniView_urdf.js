import React, { useRef, useState, useEffect } from "react";
import { Button, ButtonGroup, IconButton } from "@material-ui/core";
import { Map, Image, MoreHoriz } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles";
import { Viewer, Grid as rosGrid, UrdfClient, PointCloud2 } from 'ros3d';
// import { Grid as UrdfClient } from 'ros3d';
import {COLLADA_LOADER_2} from 'three-collada-loader-2';
import ROSLIB from "roslib";

// import view1 from '../media/view1.jpeg';
// import view2 from '../media/view2.jpeg';
// const depth_camera = "http://localhost:8080/stream?topic=/depth_to_rgb/image_raw"

const useStyles = makeStyles(theme => ({
    root: {
        zindex: "1",
        opacity:"1"
    },
    image: {
        width: "200px",
        borderRadius:"0 0 5px 5px"
    },
    iconButton: {
        flex: "10%",
        fontSize: "17px",
        color: theme.palette.text.primary,
        height: "7px",
    },
    icon:{
        flex: "10%",
        fontSize: "17px",
        color: theme.palette.text.primary,
        paddingTop:"2px",
    },
    title: {
        flex: "80%",
        paddingTop:"2px",
        paddingLeft:"2px"
    },
    header: {
        display: "flex",
        padding: theme.spacing(0.1),
        textAlign: "left",
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        borderStyle: "none",
        fontSize: "12px",
        width: "196px",
        paddingBottom: "2px",
        padding: "2px",
        fontWeight: "bold",
        margin: "auto",
        borderRadius:"5px 5px 0 0",
    },
}));

const depth_camera = () => {
	return ( 
        <div id="depth_camera" className="shoe-container">
            <img src="http://localhost:8080/stream?topic=/depth_to_rgb/image_raw" alt=""/>
        </div>
    );
}




function MiniView_Urdf(props) {
    var ros;

    useEffect(() => {
    ros = new ROSLIB.Ros({
        // url : 'ws://192.168.50.4:9090'
        url: 'ws://localhost:9090'
    })
    // Create the main viewer.
    var viewer = new Viewer({
        divID: 'urdftest',
        width: '300',
        height: '300',
        antialias: true
    });

    // Add a grid.
    viewer.addObject(new rosGrid());
    // viewer.addObject(new Viewer());

    // Setup a client to listen to TFs.
    var tfClient = new ROSLIB.TFClient({
        ros: ros,
        angularThres: 0.01,
        transThres: 0.01,
        rate: 10.0,
        fixedFrame : '/base_link'
    });

    // Setup the URDF client.
    var urdfClient = new UrdfClient({
        ros: ros,
        tfClient: tfClient,
        path : 'http://192.168.50.4:8002/',
        // path: 'http://localhost:8002/',
        rootObject: viewer.scene,
        loader: COLLADA_LOADER_2
    });

    },[]);


    const classes = useStyles();
    return (
            <div id='urdftest'  className={classes.image}></div>
    );
}

export default MiniView_Urdf;


