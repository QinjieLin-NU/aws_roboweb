import ROSLIB from "roslib";

const SpotObserveConnection = new ROSLIB.Ros({
    url: 'ws://192.168.10.68:9090'
});
console.log("====init observe once====")

export default SpotObserveConnection;