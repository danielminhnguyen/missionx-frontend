import { red } from "@material-ui/core/colors";

const { makeStyles } = require("@material-ui/core");

export default makeStyles((theme) => ({
  content: {
    padding: theme.spacing(5),
  },
  categoryTitle: {
    textTransform: "uppercase",
    borderBottom: "1.2px solid #767676",
    paddingBottom: "2px",
  },
  checkboxWrapper: {
    maxWidth: "220px",
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
  },
  rootCheckbox: {
    margin: `${theme.spacing.unit * 0.5}px ${theme.spacing.unit * 1}px`,
  },
  checked: {
    color: "#3B99FC",
  },
  buttonWrapper: {
    "& button": {
      color: "black",
      backgroundColor: "#F7F0F0",
      fontSize: "0.7rem",
      boxShadow: "none",
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  buttonActive: {
    backgroundColor: "#65AFFA !important",
    color: "#FFFFFF !important",
  },
  grow: {
    flexGrow: 1,
  },
  projectItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  projectImage: {
    objectFit: "cover",
  },
  projectPaperRoot: {
    borderRadius: "35%",
    height: 221,
    width: 314,
    marginBottom: 100,
  },
  projectWrapper: {},
}));
