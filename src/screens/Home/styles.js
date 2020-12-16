const { makeStyles } = require("@material-ui/core");

export default makeStyles((theme) => ({
  headerImage: {
    objectFit: "cover",
    position: "absolute",
    right: 0,
    zIndex: -1,
    height: 300,
  },
}));
