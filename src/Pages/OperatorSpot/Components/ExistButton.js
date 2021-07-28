import React, { useRef, useState } from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";


const CustomButton = withStyles((theme) => ({
    root: {
        color: "#ffffff",
        borderRadius: "5px",
        fontSize: "10px",
        width: "80px",
        position:"fixed",
        left:"0",
        bottom:"0",
        borderRadius:"15px",
        margin: "20px",
        marginLeft:"40px",
        backgroundColor: "rgba(255, 20, 147, 0.6)",
        '&:hover': {
            backgroundColor: "rgba(255, 20, 147, 0.9)",
        },
    },
}))(Button);

function ExistButton() {
   
    return (
        <CustomButton variant="contained" color="secondary">Exist</CustomButton>
    );
}

export default ExistButton;


