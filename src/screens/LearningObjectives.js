import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

import objective1 from "assets/images/objective-block-1-0.png";
import objective2 from "assets/images/objective-block-1-1.png";
import objective3 from "assets/images/objective-block-1-2.png";
import objective4 from "assets/images/objective-block-2-0.png";
import objective5 from "assets/images/objective-block-2-1.png";
import objective6 from "assets/images/objective-block-3-0.png";
import objective7 from "assets/images/objective-block-3-1.png";

const useStyles = makeStyles((theme) => ({
  block: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    "& *": {
      marginLeft: theme.spacing(1),
    },
    "& > div": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
  },
  title: {
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
  subTitle: {
    marginBottom: theme.spacing(2),
  },
}));

export default function LearningObjectives() {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.title} variant="h2">
        Explore Sratch blocks
      </Typography>
      <Typography className={classes.subTitle}>
        Learn the basic function of some basic scratch blocks such as “say,” “wait,” “go to” and
        “hide.”
      </Typography>
      <div className="row">
        <div>
          <Typography variant="h4">Look Blocks</Typography>
          <div className={classes.block}>
            <img src={objective1} alt="" />
            <div>
              <img src={objective2} alt="" />
              <img src={objective3} alt="" />
            </div>
          </div>
        </div>
        <div>
          <Typography variant="h4">Control Blocks</Typography>
          <div className={classes.block}>
            <img src={objective4} alt="" />
            <img src={objective5} alt="" />
          </div>
        </div>

        <div>
          <Typography variant="h4">Motion Blocks</Typography>
          <div className={classes.block}>
            <img src={objective6} alt="" />
            <img src={objective7} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
