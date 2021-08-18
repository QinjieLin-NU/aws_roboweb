import ROSLIB from "roslib";

const SpotOperatorConnection = new ROSLIB.Ros({
    url: 'ws://192.168.10.68:9090'
});
console.log("====init operator once====")

export default SpotOperatorConnection;