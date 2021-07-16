import {Button, Container, CssBaseline, Grid, ThemeProvider} from "@material-ui/core";
import './index.css';
import video from './media/Video.jpeg';


function RobotView() {
  return (
    <div>
      <img src={video} className="fill-window"></img>

    </div>
  );
}

export default RobotView;
