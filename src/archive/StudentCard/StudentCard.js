import { Card, makeStyles } from "@material-ui/core";
import React from "react";
import student from "assets/images/student-profile.png";
import { timeFormat, dateFormat } from "util";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
}));

export default function StudentCard(image, time) {
  const classes = useStyles();
  return (
    <>
      <Card className="row">
        <img src={image} alt=""></img>
        <div className={classes.grow}>needs help with projects</div>
        <div>{time}</div>
      </Card>
    </>
  );
}
