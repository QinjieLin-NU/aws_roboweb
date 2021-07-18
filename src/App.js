import {ThemeProvider } from "@material-ui/core";
import './App.css';
import RobotView from './Pages/RobotView/index'
import { theme } from "./theme";
import SimpleMenu from "./DropDown";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RobotView />
      <SimpleMenu/>
    </ThemeProvider>


  );
}

export default App;
