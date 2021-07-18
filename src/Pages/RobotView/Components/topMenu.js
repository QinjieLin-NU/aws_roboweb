import React, { useRef, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import { Map, SettingsInputAntennaRounded, MoreHoriz } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    wrapper: {
        zIndex: "1",
        display: "flex",
        position: "fixed",
        left: "0",
        top: "0",
        margin: "20px",
        marginLeft:"100px",
        background: "rgba(28, 30, 46, 0.6)",
        height: "30px",
        width:"120px",
        borderRadius:"15px",
        alignItems: "center",
        justifyContent:"center",
    },
    text:{
        color:"#ffffff",
        fontWeight:"bold",
        fontSize:"13px",
        marginLeft:"5px"
    }


}));

function TopMenu() {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
        <SettingsInputAntennaRounded style={{ color: "#18d2ff" }}/>
        <span className={classes.text}>Spot.003</span>

        </div>
    );
}

export default TopMenu;


