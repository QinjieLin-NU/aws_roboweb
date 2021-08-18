import React from 'react';
import '../index.css';
class ObserveCameraImg extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          _idMounted: true
        };
      }

    componentDidMount() {
      }

    componentWillMount() {
    }   

    componentDidUpdate() {
    }

    componentWillUnmount() {
        this.setState({_idMounted: false});
        document.getElementById("spot-observe-cameraview").src = null; 
     }

    render() {
        return (
            <img id="spot-observe-cameraview" alt="Camera view image"  src="http://192.168.10.68:9092/stream?topic=/camera/rgb/image_raw" className="content-half"></img>
            ); 
      }
}


export default ObserveCameraImg;