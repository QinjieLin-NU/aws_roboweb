import React, { useRef, useState } from "react";
import { Button, ButtonGroup, IconButton } from "@material-ui/core";
import { Map, Image, MoreHoriz } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles";

import view1 from '../media/view1.jpeg';
import view2 from '../media/view2.jpeg';

const useStyles = makeStyles(theme => ({
    root: {
        zindex: "1"
    },
    image: {
        width: "70%",
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
        width: "70%",
        paddingBottom: "2px",
        padding: "2px",
        fontWeight: "bold",
        margin: "auto",
        marginTop: "6%"
    },
}));

function MiniView(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                {props.src == "view1" ? <Map className={classes.icon} /> : <Image className={classes.icon} />}
                <span className={classes.title}>{props.src == "view1" ? "gps" : "capture"}</span>

                <IconButton aria-label="more" className={classes.iconButton}>
                    <MoreHoriz fontSize="small" />
                </IconButton>
            </div>
            <img src={props.src == "view1" ? view1 : view2} className={classes.image}></img>
        </div>
    );
}

export default MiniView;


