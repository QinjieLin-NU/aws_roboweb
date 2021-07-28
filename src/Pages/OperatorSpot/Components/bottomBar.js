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
        width: "500px",
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
    // Data saved in states, init to random test data.
    const [CPU, setCPU] = useState(87);
    const [Memory, setMemory] = useState(70);
    const [Battery, setBattery] = useState(61);
    const [Ping, setPing] = useState(90);

    return (
        <div className={classes.wrapper}>
            <CircularProgress className={classes.progress} variant="determinate" size={16} value={CPU} />
            <span className={classes.item + " " + classes.text}>CPU</span>
            <span className={classes.item + " " + classes.number}>{CPU}%</span>
            <CircularProgress className={classes.progress} variant="determinate" size={16} value={Memory} />
            <span className={classes.item + " " + classes.text}>MEMORY</span>
            <span className={classes.item + " " + classes.number}>{Memory}%</span>
            <CircularProgress className={classes.progress} variant="determinate" size={16} value={Battery} />
            <span className={classes.item + " " + classes.text}>BATTERY</span>
            <span className={classes.item + " " + classes.number}>{Battery}%</span>
            <CircularProgress className={classes.progress} variant="determinate" size={16} value={Ping} />
            <span className={classes.item + " " + classes.text}>PING</span>
            <span className={classes.item + " " + classes.number}>{Ping}ms</span>
        </div>
    );
}

export default BottomBar;


