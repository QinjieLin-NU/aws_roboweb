import { Button, Container, CssBaseline, Grid, ThemeProvider } from "@material-ui/core";
import './index.css';
import video from './media/Video.jpeg';
import MiniView from './Components/miniView';

function RobotView() {
    return (
        <div>
            <img src={video} className="fill-window"></img>
            <div className="view-wrapper">
                <MiniView src="view1"/>
                <MiniView src="view2"/>
            </div>
        </div>
    );
}

export default RobotView;
