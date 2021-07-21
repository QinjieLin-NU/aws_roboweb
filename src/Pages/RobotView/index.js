import { Button, Container, CssBaseline, Grid, ThemeProvider } from "@material-ui/core";
import './index.css';
import video from './media/Video.jpeg';
import MiniView from './Components/miniView';
import MiniView_Image from './Components/miniView_image';
import BottomBar from "./Components/bottomBar";
import ControlPanel from "./Components/controlPanel";
import TopMenu from "./Components/topMenu";
import ExistButton from "./Components/ExistButton";

function RobotView() {
    return (
        <div>
            {/* <img src={video} className="fill-window"></img> */}
            <img src="http://192.168.50.4:8080/stream?topic=/rgb/image_raw" className="fill-window"></img>
            <div className="view-wrapper">
                <MiniView_Image src="depth camera"/>
                <MiniView src="model"/>
            </div>
            <BottomBar/>
            <TopMenu/>
            <ControlPanel/>
            <ExistButton/>
        </div>
    );
}

export default RobotView;
