import React from "react";
import PreviewProjectPic from "assets/images/preview-project.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",

    paddingBottom: "56.25%",
    height: 0,
  },
  photo: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" },
}));

export default function PreviewProject() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img className={classes.photo} src={PreviewProjectPic} alt="" />
    </div>
  );
}
