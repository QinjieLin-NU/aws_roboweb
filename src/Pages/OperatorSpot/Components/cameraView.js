import React, { useRef, useState } from "react";
import { Button, ButtonGroup, IconButton } from "@material-ui/core";
import { Map, Image, MoreHoriz } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    root: {
        zindex: "1",
        opacity:"1",
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
});

class CameraViewImg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          _idMounted: true
        };
      }

    componentDidMount() {
      }

    componentWillMount() {
    }   

    componentWillUnmount() {
        this.setState({_idMounted: false});
        document.getElementById("spot-operator-camera").src = null; 
     }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.header}>
                    {this.props.src == "depth camera" ? <Map className={classes.icon} /> : <Image className={classes.icon} />}
                    <span className={classes.title}>{this.props.src == "depth camera" ? "depth camera" : "model"}</span>

                    <IconButton aria-label="more" className={classes.iconButton}>
                        <MoreHoriz fontSize="small" />
                    </IconButton>
                </div>
                <img src="http://192.168.10.68:9092/stream?topic=/camera/rgb/image_raw" id="spot-operator-camera"
                className={classes.image}></img>            
            </div>
        ); 
      }
}


export default  withStyles(useStyles)(CameraViewImg);