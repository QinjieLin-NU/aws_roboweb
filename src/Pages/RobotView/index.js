// import './index.module.css';
import './index.css';
import MiniView from './Components/miniView';
import MiniView_Image from './Components/miniView_image';
import MiniView_Ir from './Components/miniView_ir';
import MiniView_Pointcloud from './Components/miniView_pointcloud';
import BottomBar from "./Components/bottomBar";
import ControlPanel from "./Components/controlPanel";
import TopMenu from "./Components/topMenu";
import ExistButton from "./Components/ExistButton";
// import Image from 'next/image';
function RobotView() {
    return (
        <div>
            {/* <img src={video} className="fill-window"></img> */}
            {/* <Image src="http://192.168.50.4:8080/stream?topic=/rgb/image_raw" className="fill-window" layout="fill"></Image> */}
            <img src="http://192.168.50.4:8080/stream?topic=/rgb/image_raw" className="fill-window" ></img>
            <div className="view-wrapper">
                <MiniView_Image src="depth camera"/>
                <MiniView_Pointcloud src="pointcloud"/>
                <MiniView_Ir />
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
