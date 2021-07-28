import './index.css';
import { MoreHoriz, FilterList, Map } from "@material-ui/icons"
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import image from "./../OperatorLocobot/media/Video.jpeg";
import image1 from "./../OperatorLocobot/media/view1.jpeg";
import image2 from "./../OperatorLocobot/media/view2.jpeg";
// import ControlPanel from "./Components/controlPanel";
import MiniView_Urdf from './Components/miniView_urdf';
import MiniView_Pointcloud from './Components/miniView_pointcloud';
import LineChart1 from "./Components/LineChart1";
import LineChart2 from "./Components/LineChart2";
const useStyles = makeStyles(theme => ({
    button: {
        background: theme.palette.background.default2,
        '&:hover': {
            background: theme.palette.background.default1,
        },
        marginLeft: "20px",
        sizeSmall: "15px"
    },
    iconButton: {
        flex: "10%",
        fontSize: "17px",
        color: theme.palette.text.primary,
        height: "7px",
    },
    icon: {
        flex: "10%",
        fontSize: "17px",
        color: theme.palette.text.primary,
        paddingTop: "2px",
    },
    title: {
        flex: "80%",
        paddingTop: "2px",
//        paddingLeft: "2px"
    },
    header: {
        display: "flex",
        padding: theme.spacing(0.1),
        textAlign: "left",
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        borderStyle: "none",
        fontSize: "12px",
        width: "100%",
        paddingBottom: "2px",
        padding: "2px",
        fontWeight: "bold",
        margin: "auto",
        borderRadius: "5px 5px 0 0",
    },
}));

function ObserveLocobot() {
    const classes = useStyles();
    return (
        <div className="frame">
            <div className="leftBlue"></div>
            <div className="top-label">spot.003</div>
            <div className="top-button-wrapper">
                <IconButton aria-controls="simple-menu" aria-haspopup="true" size="small" className={classes.button}>
                    <FilterList />
                </IconButton>
                <IconButton aria-controls="simple-menu" aria-haspopup="true" size="small" className={classes.button}>
                    <MoreHoriz />
                </IconButton>
            </div>
            <div className="grid">
                <div className="row">
                    <div className="top-1">
                        <div className={classes.header}>
                            <Map className={classes.icon} />
                            <span className={classes.title}>observation cam</span>
                            <IconButton aria-label="more" className={classes.iconButton}>
                                <MoreHoriz fontSize="small" />
                            </IconButton>
                        </div>
                        <img src='http://192.168.50.4:8080/stream?topic=/rgb/image_raw' className="content"></img>

                    </div>
                    <div className="top-2">
                        <div className={classes.header}>
                            <Map className={classes.icon} />
                            <span className={classes.title}>Joint 1 position</span>
                            <IconButton aria-label="more" className={classes.iconButton}>
                                <MoreHoriz fontSize="small" />
                            </IconButton>
                        </div>
                        <div className="chart-wrapper">
                        <LineChart1  />
                        </div>
                    </div>
                    <div className="top-3">
                        <div className={classes.header}>
                            <Map className={classes.icon} />
                            <span className={classes.title}>Joint 2 position</span>
                            <IconButton aria-label="more" className={classes.iconButton}>
                                <MoreHoriz fontSize="small" />
                            </IconButton>
                        </div>
                        <div className="chart-wrapper">
                        <LineChart2  />
                        </div>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="bottom-1">
                        <div className={classes.header}>
                            <Map className={classes.icon} />
                            <span className={classes.title}>Lidar.reduced</span>
                            <IconButton aria-label="more" className={classes.iconButton}>
                                <MoreHoriz fontSize="small" />
                            </IconButton>
                        </div>
                        {/* <img src={image1} className="content"></img> */}
                        <img src='http://192.168.50.4:8080/stream?topic=/depth/image_raw' className="content"></img>
                    </div>
                    <div className="bottom-2">
                        <div className={classes.header}>
                            <Map className={classes.icon} />
                            <span className={classes.title}>fsdp.numeric.1</span>
                            <IconButton aria-label="more" className={classes.iconButton}>
                                <MoreHoriz fontSize="small" />
                            </IconButton>
                        </div>
                        <div className="chart-wrapper-small">
                        <LineChart1  />
                        </div>
                        <div className={classes.header}>
                            <Map className={classes.icon} />
                            <span className={classes.title}>fsdp.numeric.2</span>
                            <IconButton aria-label="more" className={classes.iconButton}>
                                <MoreHoriz fontSize="small" />
                            </IconButton>
                        </div>
                        <div className="chart-wrapper-small">
                        <LineChart2  />
                        </div>
                    </div>
                    <div className="bottom-3">
                        <div className={classes.header}>
                            <Map className={classes.icon} />
                            <span className={classes.title}>Job.lot</span>
                            <IconButton aria-label="more" className={classes.iconButton}>
                                <MoreHoriz fontSize="small" />
                            </IconButton>
                        </div>
                        {/* <img src={image2} className="content"></img> */}
                        {/* <img src='http://192.168.50.4:8080/stream?topic=/ir/image_raw' className="content"></img> */}
                        {/* <MiniView_Pointcloud src="pointcloud"/> */}
                        {/* <div><MiniView_Pointcloud/></div> */}
                        <div><MiniView_Urdf/></div>
                    </div>
                    <div className="bottom-4">
                        <div className={classes.header}>
                            <Map className={classes.icon} />
                            <span className={classes.title}>Capture</span>
                            <IconButton aria-label="more" className={classes.iconButton}>
                                <MoreHoriz fontSize="small" />
                            </IconButton>
                        </div>
                        <div className="chart-wrapper">
                        <LineChart1  />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ObserveLocobot;
