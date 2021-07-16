import {createMuiTheme} from "@material-ui/core";

export const theme = createMuiTheme({
    palette: {
        type: "dark",
        background: {
            default:"#1c1e2e",
            default1: "#404040",
            default2:"#39456C"
        },
        text: {
            primary: "#BAC4E2",
            blue:"#18D2FF"
        }
    },
    overrides: {
        MuiButton: {
            text: {
                fontWeight: "bold",
                font: "Moderat"
            },
            contained: {
                fontWeight: "bold",
                borderRadius: "20px",
            },
            containedSecondary: {
                fontWeight: "bold",
                borderRadius: "20px",
                borderWidth: "2px",
            },
            outlined: {
                fontWeight: "bold",
                borderRadius: "20px",
                borderWidth: "2px",
            },
            outlinedSecondary: {
                fontWeight: "bold",
                borderRadius: "20px",
                borderWidth: "2px",
            },
        },
        MuiContainer: {
            maxWidthXl: {
                minWidth: "1800px",
            }
        }

    }
});