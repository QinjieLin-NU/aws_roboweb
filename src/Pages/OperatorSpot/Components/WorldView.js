import React from 'react';
import Iframe from 'react-iframe'
import Img from 'react-cool-img';

class WorldViewImg extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          _idMounted: true
        };
      }

    componentDidMount() {
        console.log("did mount function",this.state._idMounted);
      }

    componentWillMount() {
      if (document.getElementById("spot-operator-worldview") ){
        console.log("xx")
      } 
      console.log(" will mount function",this.state._idMounted);
    }   

    componentDidUpdate() {
        console.log("did update function");
    }

    shouldComponentUpdate(){
      return true
    }

    componentWillUnmount() {
        this.setState({_idMounted: false});
        document.getElementById("spot-operator-worldview").src = null; 
        console.log("will unmount function",this.state._idMounted);
     }

    render() {
        console.log("render function",this.state._idMounted)
        return (
        <div>
            <Img id="spot-operator-worldview" alt="World view image" 
            src={ "http://192.168.10.68:9092/stream?topic=/world_view/world_camera/world_raw_image&type=mjpeg&quality=30"} className="fill-window" >
            </Img>
        </div>
        ); 
      }
}

console.log("====init world view====")

export default WorldViewImg;