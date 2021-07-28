import { ThemeProvider } from "@material-ui/core";
import React, { useRef, useState } from "react";
import './App.css';
// import RobotView from './Pages/RobotView/index';
// import Observe from './Pages/Observe/index';
import { theme } from "./theme";
import SimpleMenu from "./DropDown";
import ObserveSpot from "./Pages/ObserveSpot";
import OperatorSpot from "./Pages/OperatorSpot";
import ObserveLocobot from "./Pages/ObserveLocobot";
import OperatorLocobot from "./Pages/OperatorLocobot";

function App() {
  const [page, setPage] = useState(0);
  const Page = () =>{
    if(page==0){
      return <OperatorSpot/>
    } else if (page==1){
      return <ObserveSpot/>
    } else if (page==2){
      return <OperatorLocobot/>
    } else{
      return <ObserveLocobot/>
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <SimpleMenu changeView={setPage} />
      {Page()}
    </ThemeProvider>


  );
}

export default App;
