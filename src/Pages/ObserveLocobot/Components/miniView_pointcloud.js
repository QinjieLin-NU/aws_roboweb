import React, { useRef, useState, useEffect } from "react";
import { Button, ButtonGroup, IconButton } from "@material-ui/core";
import { Map, Image, MoreHoriz } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles";
import { Viewer, Grid as rosGrid, UrdfClient, PointCloud2 } from 'ros3d';
// import { Grid as UrdfClient } from 'ros3d';
import {COLLADA_LOADER_2} from 'three-collada-loader-2';
import ROSLIB from "roslib";
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



function MiniView_Pointcloud(props) {
    const classes = useStyles();
    var ros;

    useEffect(() => {
    ros = new ROSLIB.Ros({
        // url : 'ws://192.168.50.4:9090'
        url: 'ws://localhost:9090'
    })

    // Setup a client to listen to TFs.
    var pointCloudTfClient = new ROSLIB.TFClient({
        ros : ros,
        angularThres : 0.01,
        transThres : 0.01,
        rate : 10.0,
        fixedFrame : '/camera_link'
        // fixedFrame : '/depth_camera_link'
        });

    // create pointcloud viewer
    var pointCloudViewer = new Viewer({
        divID: 'pointcloud',
        width: '200',
        height: '200',
        antialias: true
    });

    var tmpSub = new PointCloud2({
        ros:ros,
        tfClient: pointCloudTfClient, 
        rootObject: pointCloudViewer.scene,
        topic: '/points2',
        //  material: {size: 0.01, color: 0xeeeeee },
        material: {size: 0.01},
        colorsrc: 'rgb',
        
        // max_pts: 5000000 // 5 million points
        max_pts: 10000000 // 5 million points
        });

    },[]);
    return (
            <div id='pointcloud' className={classes.image}></div>
    );
}

export default MiniView_Pointcloud;


