import { Button, Container, CssBaseline, Grid, ThemeProvider } from "@material-ui/core";
import './index.css';
import video from './media/Video.jpeg';
import MiniView from './Components/miniView';
import BottomBar from "./Components/bottomBar";
import ControlPanel from "./Components/controlPanel";

function RobotView() {
    return (
        <div>
            <img src={video} className="fill-window"></img>
            <div className="view-wrapper">
                <MiniView src="view1"/>
                <MiniView src="view2"/>
            </div>
            <BottomBar/>
            <ControlPanel/>
        </div>
    );
}

export default RobotView;
