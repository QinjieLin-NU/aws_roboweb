import React, { useRef, useState } from "react";
import { CircularProgress } from "@material-ui/core";
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
        alignItems: "center",
        justifyContent:"center"
    },
    item: {
//       paddingTop:"5px",
 //       flex: "8%",
        fontSize: "12px",
        fontWeight: "bold",
        margin:"7px",
    },
    text: {
        color: theme.palette.text.primary
    },
    number: {
        color: "#FFFFFF"
    },
    progress:{
        color:"#18D2FF",
        paddingTop:"6px",
        margin:"2px",
    }



}));

function BottomBar(props) {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <CircularProgress className={classes.progress} variant="determinate" size={16} value={29} />
            <span className={classes.item + " " + classes.text}>CPU</span>
            <span className={classes.item + " " + classes.number}>29%</span>
            <CircularProgress className={classes.progress} variant="determinate" size={16} value={12} />
            <span className={classes.item + " " + classes.text}>Memory</span>
            <span className={classes.item + " " + classes.number}>12%</span>
            <CircularProgress className={classes.progress} variant="determinate" size={16} value={61} />
            <span className={classes.item + " " + classes.text}>Battery</span>
            <span className={classes.item + " " + classes.number}>61%</span>
            <CircularProgress className={classes.progress} variant="determinate" size={16} value={90} />
            <span className={classes.item + " " + classes.text}>PING</span>
            <span className={classes.item + " " + classes.number}>68ms</span>
        </div>
    );
}

export default BottomBar;


