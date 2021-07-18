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
        height: "230px",
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
        backgroundColor: "rgba(28, 30, 46, 0.6)",
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
                        borderWidth={5}
                        borderColor="#d7eff5"
                        knobColor="linear-gradient(to bottom, #18D2FF, #23869e)"
                        onActivity={setCoordinate1}
                    /></div>

                <div className="half">
                    <Joystick
                        width={90}
                        knobWidth={20}
                        borderWidth={5}
                        borderColor="#d7eff5"
                        knobColor="linear-gradient(to bottom, #18D2FF, #23869e)"
                        onActivity={setCoordinate2}
                    /></div>
            </div>
            <div className={classes.flex}>
                <Grid container spacing={2}>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider value={volume} onChange={handleChange} aria-labelledby="continuous-slider" />
                    </Grid>
                    <Grid item>
                        <VolumeUp />
                    </Grid>
                </Grid>

            </div>

        </div>
    );
}

export default ControlPanel;


