import React, { useEffect, useState } from "react";
import { Button, Grid, Slider } from "@material-ui/core";
import { VolumeDown, VolumeUp } from "@material-ui/icons"
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { ROS3D } from "@robot-web-tools/ros3djs";
import { ROSLIB } from "roslib";
import Joystick from "./joystick";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        zIndex: "1",
        position: "fixed",
        bottom: "0",
        right: "0",
        margin: "20px",
        padding: "10px",
        width: "200px",
        borderRadius: "10px",
        height: "210px",
        background: "rgba(28, 30, 46, 0.3)"
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
    volumeButton: {
        color: theme.palette.text.primary,
        //        background:"rgba(28, 30, 46, 0.6)",
        borderRadius: "50%"
    },
    slider: {
        color: theme.palette.text.blue,
        opacity: "0.7"
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

    useEffect(() => {
        var ros = new ROSLIB.Ros({
            // url : 'ws://192.168.50.4:9090'
            url: 'ws://localhost:9091'
        });


        // Create the main viewer.
        var viewer = new ROS3D.Viewer({
            divID: 'urdf',
            width: '300',
            height: '300',
            antialias: true
        });

        // Add a grid.
        viewer.addObject(new ROS3D.Grid());

        // Setup a client to listen to TFs.
        var tfClient = new ROSLIB.TFClient({
            ros: ros,
            angularThres: 0.01,
            transThres: 0.01,
            rate: 10.0
        });

        // Setup the URDF client.
        var urdfClient = new ROS3D.UrdfClient({
            ros: ros,
            tfClient: tfClient,
            // path : 'http://192.168.50.4:8001/',
            path: 'http://localhost:8003/',
            rootObject: viewer.scene,
            loader: ROS3D.COLLADA_LOADER
        });


        ros.on('connection', function () {
            document.getElementById("status").innerHTML = "Connected";
        });

        ros.on('error', function (error) {
            document.getElementById("status").innerHTML = "Error";
        });

        ros.on('close', function () {
            document.getElementById("status").innerHTML = "Closed";
        });

        var txt_listener = new ROSLIB.Topic({
            ros: ros,
            name: '/txt_msg',
            messageType: 'std_msgs/String'
        });

        txt_listener.subscribe(function (m) {
            document.getElementById("msg").innerHTML = m.data;
            move(1, 0);
        });

        cmd_vel_listener = new ROSLIB.Topic({
            ros: ros,
            // name : "/navigation_velocity_smoother/raw_cmd_vel",
            name: "/mobile_base/commands/velocity",
            messageType: 'geometry_msgs/Twist'
        });

        move = function (linear, angular) {
            var twist = new ROSLIB.Message({
                linear: {
                    x: linear,
                    y: 0,
                    z: 0
                },
                angular: {
                    x: 0,
                    y: 0,
                    z: angular
                }
            });
            cmd_vel_listener.publish(twist);
        }


        createJoystick();
        getTopics();

    });

    const createJoystick = () => {

        linear_speed = 0;
        angular_speed = 0;

        self.manager.on('start', function (event, nipple) {
            timer = setInterval(function () {
                move(linear_speed, angular_speed);
            }, 25);
        });

        self.manager.on('move', function (event, nipple) {
            max_linear = 5.0; // m/s
            max_angular = 2.0; // rad/s
            max_distance = 75.0; // pixels;
            linear_speed = Math.sin(nipple.angle.radian) * max_linear * nipple.distance / max_distance;
            angular_speed = -Math.cos(nipple.angle.radian) * max_angular * nipple.distance / max_distance;
        });

        self.manager.on('end', function () {
            if (timer) {
                clearInterval(timer);
            }
            self.move(0, 0);
        });

    }

    const getTopics = () => {
        var topicsClient = new ROSLIB.Service({
            ros: ros,
            name: '/rosapi/topics',
            serviceType: 'rosapi/Topics'
        });

        var request = new ROSLIB.ServiceRequest();

        topicsClient.callService(request, function (result) {
            console.log("Getting topics...");
            console.log(result.topics);
        });
    };

    //this.onActivity({ position:{ x:0, y:0 }, intensity:{ x:0, y:0 } })
    const onMove = ({position,intensity})=>{
        const max_linear = 5.0; // m/s
        const max_angular = 2.0; // rad/s
        const max_distance = 75.0; // pixels;
        var x = position.x;
        var y = position.y;
        var linear_speed = Math.sin(nipple.angle.radian) * max_linear * Math.pow() / max_distance;
        var angular_speed = -Math.cos(nipple.angle.radian) * max_angular * nipple.distance / max_distance;


    }

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
                        onActivity={onMove}
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
                        <VolumeDown className={classes.volumeButton} />
                    </Grid>
                    <Grid item xs>
                        <Slider value={volume} onChange={handleChange} className={classes.slider} aria-labelledby="continuous-slider" />
                    </Grid>
                    <Grid item>
                        <VolumeUp className={classes.volumeButton} />
                    </Grid>
                </Grid>

            </div>

        </div>
    );
}

export default ControlPanel;


