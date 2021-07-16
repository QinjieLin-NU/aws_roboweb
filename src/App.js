import {ThemeProvider } from "@material-ui/core";
import './App.css';
import RobotView from './Pages/RobotView/index'
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RobotView />
    </ThemeProvider>


  );
}

export default App;
