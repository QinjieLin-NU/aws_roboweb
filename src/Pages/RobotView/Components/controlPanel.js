import React, { useRef, useState } from "react";
import { Button , Grid,Slider } from "@material-ui/core";
import {VolumeDown,VolumeUp} from "@material-ui/icons"
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Joystick from "./joystick";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        zIndex: "1",
        position: "fixed",
        bottom: "0",
        right: "0",
        margin: "20px",
        padding:"10px",
        width: "200px",
        borderRadius: "10px",
        height: "210px",
        background:"rgba(28, 30, 46, 0.3)"
    },
    margin: {
        margin: theme.spacing(0.5),
    },
    flex: {
        display: "flex",
        justifyContent: "center"
    },
    half: {
        flex: "50%",
        textAlign: "center"
    },
    volumeButton:{
        color:theme.palette.text.primary,
//        background:"rgba(28, 30, 46, 0.6)",
        borderRadius:"50%"
    },
    slider:{
        color:theme.palette.text.blue,
        opacity:"0.7"
 //       width:"100px"

    }
}));

const CustomButton = withStyles((theme) => ({
    root: {
        color: theme.palette.text.primary,
        borderRadius: "5px",
        fontSize: "10px",
        width: "200px",
        borderBottom: "3px solid",
        borderBottomColor: theme.palette.text.blue,
        backgroundColor: "rgba(28, 30, 46, 0.5)",
        '&:hover': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(Button);

function ControlPanel(props) {
    const classes = useStyles();
    const [coordinate1, setCoordinate1] = useState([0, 0]);
    const [coordinate2, setCoordinate2] = useState([0, 0]);
    const [volume, setVolume] = React.useState(30);

    const handleChange = (event, newValue) => {
      setVolume(newValue);
    };
    // original set State function 
    //  update = v => this.setState({ text: `X: ${v.intensity.x>0 ? '+':''}${(v.intensity.x*100).toFixed(0)}% | Y: ${v.intensity.y>0 ? '+':''}${(v.intensity.y*100).toFixed(0)}%` })

    return (
        <div className={classes.wrapper}>
            <div className={classes.flex}>
                <CustomButton variant="contained" color="primary" className={classes.margin}>POSE</CustomButton>
                <CustomButton variant="contained" color="primary" className={classes.margin}>SIT</CustomButton>
            </div>
            <div className={classes.flex}>
                <CustomButton variant="contained" color="primary" className={classes.margin}>STAIRS</CustomButton>
                <CustomButton variant="contained" color="primary" className={classes.margin}>HOME</CustomButton>
            </div>
            <div className={classes.flex}>
                <div className="half">
                    <Joystick
                        width={90}
                        knobWidth={20}
                        borderWidth={4}
                        borderColor="rgba(215, 239, 245,0.5)"
                        knobColor="rgba(28, 30, 46, 0.3)"
                        onActivity={setCoordinate1}
                    /></div>

                <div className="half">
                    <Joystick
                        width={90}
                        knobWidth={20}
                        borderWidth={4}
                        borderColor="rgba(215, 239, 245,0.5)"
                        knobColor="rgba(28, 30, 46, 0.3)"
                        onActivity={setCoordinate2}
                    /></div>
            </div>
            <div className={classes.flex}>
                <Grid container spacing={1}>
                    <Grid item>
                        <VolumeDown className={classes.volumeButton}/>
                    </Grid>
                    <Grid item xs>
                        <Slider value={volume} onChange={handleChange} className={classes.slider} aria-labelledby="continuous-slider" />
                    </Grid>
                    <Grid item>
                        <VolumeUp className={classes.volumeButton}/>
                    </Grid>
                </Grid>
                
            </div>

        </div>
    );
}

export default ControlPanel;


