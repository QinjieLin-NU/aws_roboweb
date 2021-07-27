import './index.css';
import { MoreHoriz,FilterList } from "@material-ui/icons"
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
    button: {
        background: theme.palette.text.default1,
        '&:hover': {
          background: theme.palette.background.default2,
      },
    }
  }));

function Observe() {
    const classes = useStyles();
    return (
        <div className="frame">
            <div className="leftBlue"></div>
            <div className="top-label">spot.003</div>
            <div className="top-button-wrapper">
                <IconButton aria-controls="simple-menu" aria-haspopup="true" className={classes.button}>
                    <MoreHoriz fontSize="small" />
                </IconButton>
                <IconButton aria-controls="simple-menu" aria-haspopup="true" className={classes.button}>
                    <FilterList fontSize="small" />
                </IconButton>
            </div>
        </div>
    );
}

export default Observe;
