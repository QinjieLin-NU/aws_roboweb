import React, { useRef, useState } from "react";
import { Button, ButtonGroup, ClickAwayListener } from "@material-ui/core";
import { Map, Image, MoreHoriz } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    wrapper: {
        zIndex: "1",
        display: "flex",
        position: "fixed",
        bottom: "20px",
        left: "0",
        right: "0",
        marginLeft: "auto",
        marginRight: "auto",
        width: "40%",
        background: theme.palette.background.default,
        height: "30px",
        borderRadius: "15px",
        opacity: "0.6",
        textAlign: "center"
    },
    item: {
        paddingTop:"5px",
        flex: "10%",
        fontSize: "12px",
        fontWeight: "bold"
    },
    text: {
        color: theme.palette.text.primary
    },
    number: {
        color: "#FFFFFF"
    }



}));

function BottomBar(props) {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <span className={classes.item + " " + classes.text}>CPU</span>
            <span className={classes.item + " " + classes.number}>29%</span>
            <span className={classes.item + " " + classes.text}>Memory</span>
            <span className={classes.item + " " + classes.number}>12%</span>
            <span className={classes.item + " " + classes.text}>Battery</span>
            <span className={classes.item + " " + classes.number}>61%</span>
            <span className={classes.item + " " + classes.text}>PING</span>
            <span className={classes.item + " " + classes.number}>68ms</span>
        </div>
    );
}

export default BottomBar;


