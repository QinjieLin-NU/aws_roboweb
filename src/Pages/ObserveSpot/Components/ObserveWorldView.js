import React from 'react';
import '../index.css';
class ObserveWorldImg extends React.Component {

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
        document.getElementById("spot-observe-worldview").src = null; 
     }

    render() {
        return (
        // <div>
            <img id="spot-observe-worldview" alt="World view image"  className="content" src={ "http://192.168.10.68:9092/stream?topic=/world_view/world_camera/world_raw_image"}  ></img>
        // </div>
        ); 
      }
}


export default ObserveWorldImg;