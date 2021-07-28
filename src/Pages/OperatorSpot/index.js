// import './index.module.css';
import './index.css';
import MiniView from './Components/miniView';
import BottomBar from "./Components/bottomBar";
import ControlPanel from "./Components/controlPanel";
import TopMenu from "./Components/topMenu";
import ExistButton from "./Components/ExistButton";
import MiniViewImage from "./Components/miniViewImage"
function OperatorSpot() {
    return (
        <div>
            <img src="http://192.168.10.68:9092/stream?topic=/world_view/world_camera/world_raw_image" className="fill-window" ></img>
            <div className="view-wrapper">
                <MiniViewImage src="depth camera"/>
                <MiniView src="model"/>
            </div>
            <BottomBar/>
            <TopMenu/>
            <ControlPanel/>
            <ExistButton/>
        </div>
    );
}

export default OperatorSpot;
