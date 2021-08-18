import MiniView from './Components/miniView';
import BottomBar from "./Components/bottomBar";
import ControlPanel from "./Components/controlPanel";
import TopMenu from "./Components/topMenu";
import ExistButton from "./Components/ExistButton";
import MiniViewImage from "./Components/miniViewImage";
import WorldViewImg from "./Components/WorldView";
import CameraViewImg from './Components/cameraView';
import ModelView from './Components/modelView';

function OperatorSpot() {
    return (
        <div>
            <WorldViewImg/>
            <div className="view-wrapper">
                <CameraViewImg src="depth camera"/>
                {/* <MiniView src="model"/> */}
                <ModelView src="model"/>
            </div>
            <BottomBar/>
            <TopMenu/>
            <ControlPanel/>
            <ExistButton/>
        </div>
    );
}

export default OperatorSpot;
