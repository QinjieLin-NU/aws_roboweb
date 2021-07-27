import { ThemeProvider } from "@material-ui/core";
import React, { useRef, useState } from "react";
import './App.css';
import RobotView from './Pages/RobotView/index';
import Observe from './Pages/Observe/index';
import { theme } from "./theme";
import SimpleMenu from "./DropDown";

function App() {
  const [page, setPage] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <SimpleMenu changeView={setPage} />
      {page ? <Observe /> : 
              <RobotView />}
    </ThemeProvider>


  );
}

export default App;
