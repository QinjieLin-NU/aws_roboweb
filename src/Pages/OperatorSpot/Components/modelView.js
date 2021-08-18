import React, { useRef, useState } from "react";
import { Button, ButtonGroup, IconButton } from "@material-ui/core";
import { Map, Image, MoreHoriz } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';
import SpotOperatorConnection from "../ros_websocket";
import { Viewer, Grid as rosGrid, UrdfClient, PointCloud2, LaserScan } from 'ros3d';
import {COLLADA_LOADER_2} from 'three-collada-loader-2';
import ROSLIB from "roslib";
import Iframe from 'react-iframe'

const useStyles = theme => ({
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
});

class ModelView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          _idMounted: true
        };
      }

    componentDidMount() {
        this.mountRos()
    }

    componentWillMount() {
    }   

    componentWillUnmount() {
    }

    componentDidUpdate(){
        // this.mountRos()
    }

    mountRos(){
        var ros = SpotOperatorConnection;

        // Create the main viewer.
        var viewer = new Viewer({
            divID: 'urdf',
            width: '200',
            height: '200',
            antialias: true
        });

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
    }


    render() {
        const { classes } = this.props;
        return (
        <div className={classes.root}>
            <div className={classes.header}>
                {this.props.src == "depth camera" ? <Map className={classes.icon} /> : <Image className={classes.icon} />}
                <span className={classes.title}>{this.props.src == "depth camera" ? "depth camera" : "model"}</span>

                <IconButton aria-label="more" className={classes.iconButton}>
                    <MoreHoriz fontSize="small" />
                </IconButton>
            </div>
            <div id={this.props.src == "model" ? "urdf" : "None"}  className={classes.image}></div>
        </div>
        ); 
      }
}


export default  withStyles(useStyles)(ModelView);