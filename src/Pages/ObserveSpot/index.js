import './index.css';
import { MoreHoriz, FilterList, Map } from "@material-ui/icons"
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import image from "./media/Video.jpeg";
import image1 from "./media/view1.jpeg";
import image2 from "./media/view2.jpeg";
import LineChart1 from "./Components/LineChart1";
import LineChart2 from "./Components/LineChart2";
import LidarView from "./Components/LidarView";
import MapView from "./Components/MapView";
import FRAngleChart from './Components/FRAngleChart';
import FLAngleChart from './Components/FLAngleChart';
import BRAngleChart from './Components/BRAngleChart';
import BLAngleChart from './Components/BLAngleChart';
import LinearVelChart from './Components/LinearVelChart';
import AngleVelChart from './Components/AngleVelChart';
import PositionXChart from './Components/PositionXChart';
import PositionYChart from './Components/PositionYChart';
import ObserveWorldImg from './Components/ObserveWorldView';
import ObserveCameraImg from './Components/ObserveCameraView';
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

function ObserveSpot() {
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
                        {/* <img src="http://192.168.10.68:9092/stream?topic=/world_view/world_camera/world_raw_image" className="content"></img> */}
                        <ObserveWorldImg></ObserveWorldImg>
                    </div>
                    <div className="top-2">
                        <div className="vertical-half">
                            <div className={classes.header}>
                                <Map className={classes.icon} />
                                <span className={classes.title}>joint.position.1</span>
                                <IconButton aria-label="more" className={classes.iconButton}>
                                    <MoreHoriz fontSize="small" />
                                </IconButton>
                            </div>
                            <div className="chart-wrapper">
                                {/* <LineChart1 /> */}
                                <FRAngleChart />
                            </div>
                        </div>
                        <div className="vertical-half">
                            <div className={classes.header}>
                                <Map className={classes.icon} />
                                <span className={classes.title}>joint.position.2</span>
                                <IconButton aria-label="more" className={classes.iconButton}>
                                    <MoreHoriz fontSize="small" />
                                </IconButton>
                            </div>
                            <div className="chart-wrapper">
                                {/* <LineChart2 /> */}
                                <FLAngleChart />
                            </div>
                        </div>
                    </div>
                    <div className="top-3">
                        <div className="vertical-half">
                            <div className={classes.header}>
                                <Map className={classes.icon} />
                                <span className={classes.title}>joint.position.3</span>
                                <IconButton aria-label="more" className={classes.iconButton}>
                                    <MoreHoriz fontSize="small" />
                                </IconButton>
                            </div>
                            <div className="chart-wrapper">
                                {/* <LineChart1 /> */}
                                < BRAngleChart/>
                            </div>
                        </div>
                        <div className="vertical-half">
                            <div className={classes.header}>
                                <Map className={classes.icon} />
                                <span className={classes.title}>joint.position.4</span>
                                <IconButton aria-label="more" className={classes.iconButton}>
                                    <MoreHoriz fontSize="small" />
                                </IconButton>
                            </div>
                            <div className="chart-wrapper">
                                {/* <LineChart2 /> */}
                                < BLAngleChart/>
                            </div>
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
                        {/* <img src={image2} className="content"></img> */}
                        <div className="content"> <LidarView /> </div>
                    </div>
                    <div className="bottom-2">
                        <div className="vertical-half">
                            <div className={classes.header}>
                                <Map className={classes.icon} />
                                <span className={classes.title}>velocity.linear</span>
                                <IconButton aria-label="more" className={classes.iconButton}>
                                    <MoreHoriz fontSize="small" />
                                </IconButton>
                            </div>
                            <div className="chart-wrapper">
                                {/* <LineChart1 /> */}
                                <LinearVelChart />
                            </div>
                        </div>
                        <div className="vertical-half">
                            <div className={classes.header}>
                                <Map className={classes.icon} />
                                <span className={classes.title}>velocity.angular</span>
                                <IconButton aria-label="more" className={classes.iconButton}>
                                    <MoreHoriz fontSize="small" />
                                </IconButton>
                            </div>
                            <div className="chart-wrapper">
                                {/* <LineChart2 /> */}
                                <AngleVelChart />
                            </div>
                        </div>
                    </div>
                    <div className="bottom-3">
                        <div className={classes.header}>
                            <Map className={classes.icon} />
                            <span className={classes.title}>map.view</span>
                            <IconButton aria-label="more" className={classes.iconButton}>
                                <MoreHoriz fontSize="small" />
                            </IconButton>
                        </div>
                        {/* <img src={image} className="content"></img> */}
                        <div className="content"> <MapView /> </div>
                    </div>
                    <div className="bottom-4">
                        <div className="vertical-half">
                            <div className={classes.header}>
                                <Map className={classes.icon} />
                                <span className={classes.title}>Capture</span>
                                <IconButton aria-label="more" className={classes.iconButton}>
                                    <MoreHoriz fontSize="small" />
                                </IconButton>
                            </div>
                            {/* <img src="http://192.168.10.68:9092/stream?topic=/camera/rgb/image_raw" className="content-half"></img> */}
                            <ObserveCameraImg></ObserveCameraImg>
                        </div>
                        <div className="vertical-half">
                            <div className="row-small">
                                <div className="container-left">
                                    <div className={classes.header}>
                                        <Map className={classes.icon} />
                                        <span className={classes.title}>position.x</span>
                                        <IconButton aria-label="more" className={classes.iconButton}>
                                            <MoreHoriz fontSize="small" />
                                        </IconButton>
                                    </div>
                                    <div className="chart-wrapper">
                                        {/* <LineChart2 /> */}
                                        <PositionXChart />
                                    </div>
                                </div>
                                <div className="container-right">
                                    <div className={classes.header}>
                                        <Map className={classes.icon} />
                                        <span className={classes.title}>position.y</span>
                                        <IconButton aria-label="more" className={classes.iconButton}>
                                            <MoreHoriz fontSize="small" />
                                        </IconButton>
                                    </div>
                                    <div className="chart-wrapper">
                                        {/* <LineChart2 /> */}
                                        <PositionYChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ObserveSpot;
