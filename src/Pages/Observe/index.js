import './index.css';
import { MoreHoriz,FilterList } from "@material-ui/icons"
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
    button: {
        background: theme.palette.background.default2,
        '&:hover': {
          background: theme.palette.background.default1,
        },
        marginLeft:"20px",
        sizeSmall:"15px"
    },
    iconButton: {
        flex: "10%",
        fontSize: "17px",
        color: theme.palette.text.primary,
        height: "7px",
    },
    icon:{
        flex: "10%",
        fontSize: "17px",
        color: theme.palette.text.primary,
        paddingTop:"2px",
    },
    title: {
        flex: "80%",
        paddingTop:"2px",
        paddingLeft:"2px"
    },
    header: {
        display: "flex",
        padding: theme.spacing(0.1),
        textAlign: "left",
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        borderStyle: "none",
        fontSize: "12px",
        width: "80%",
        paddingBottom: "2px",
        padding: "2px",
        fontWeight: "bold",
        margin: "auto",
        borderRadius:"5px 5px 0 0",
    },
  }));

function Observe() {
    const classes = useStyles();
    return (
        <div className="frame">
            <div className="leftBlue"></div>
            <div className="top-label">spot.003</div>
            <div className="top-button-wrapper">
                <IconButton aria-controls="simple-menu" aria-haspopup="true" size="small" className={classes.button}>
                    <FilterList  />
                </IconButton>
                <IconButton aria-controls="simple-menu" aria-haspopup="true" size="small" className={classes.button}>
                    <MoreHoriz  />
                </IconButton>
            </div>
            <div className="grid">
                <div className="row">
                    <div className="top-1"></div>
                    <div className="top-2"></div>
                    <div className="top-3"></div>
                </div>
                <div className="row">
                    <div className="bottom-1"></div>
                    <div className="bottom-2"></div>
                    <div className="bottom-3"></div>
                    <div className="bottom-4"></div>       
                </div>
            
            </div>
        </div>
    );
}

export default Observe;
