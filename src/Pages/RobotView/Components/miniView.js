import React, { useRef, useState } from "react";
import { Button, ButtonGroup, IconButton } from "@material-ui/core";
import { Map, Image, MoreHoriz } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles";

import view1 from '../media/view1.jpeg';
import view2 from '../media/view2.jpeg';

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

function MiniView(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                {props.src == "gps" ? <Map className={classes.icon} /> : <Image className={classes.icon} />}
                <span className={classes.title}>{props.src == "gps" ? "gps" : "capture"}</span>

                <IconButton aria-label="more" className={classes.iconButton}>
                    <MoreHoriz fontSize="small" />
                </IconButton>
            </div>
            <div id={props.src == "gps" ? "urdf" : "urdf"}  className={classes.image}></div>
        </div>
    );
}

export default MiniView;


