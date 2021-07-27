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
    }
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
        </div>
    );
}

export default Observe;
