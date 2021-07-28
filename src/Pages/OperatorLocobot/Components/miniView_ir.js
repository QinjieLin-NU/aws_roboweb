import React, { useRef, useState } from "react";
import { Button, ButtonGroup, IconButton } from "@material-ui/core";
import { Map, Image, MoreHoriz } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles";

import view1 from '../media/view1.jpeg';
import view2 from '../media/view2.jpeg';
const depth_camera = "http://localhost:8080/stream?topic=/depth_to_rgb/image_raw"

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


function MiniView_Ir(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                {props.src == "depth camera" ? <Map className={classes.icon} /> : <Image className={classes.icon} />}
                <span className={classes.title}>{"IR Camera" }</span>

                <IconButton aria-label="more" className={classes.iconButton}>
                    <MoreHoriz fontSize="small" />
                </IconButton>
            </div>
            {/* <img src={props.src=="depth camera"?depth_camera:"None"} className={classes.image}></img> */}
            <img src="http://192.168.50.4:8080/stream?topic=/ir/image_raw"
 className={classes.image}></img>
            {/* <div id={props.src == "depth camera" ? "depth_camera" : "None"}  className={classes.image}></div> */}
            {/* <div id={props.src == "model" ? "urdf" : "None"}  className={classes.image}></div> */}
            
        </div>
    );
}

export default MiniView_Ir;


