import { Box, Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";

import ProjectImage from "assets/images/submit-project.png";
import CallImage from "assets/images/call-teacher.png";
import { ReactComponent as ImgageIcon } from "assets/images/image-icon.svg";
import { ReactComponent as SubmissionIcon } from "assets/images/call-teacher-icon.svg";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
    paddingTop: "10px",
    backgroundColor: theme.palette.secondary.main,
    height: 100,
    width: 200,
    borderRadius: "10%",
    color: "#fff",
    cursor: "pointer",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  title: {
    marginBottom: theme.spacing(3),
  },
  image: {
    marginBottom: theme.spacing(3),
  },
}));

export default function SubmitProject() {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <div className="column">
            <div className={classes.image}>
              <img src={ProjectImage} alt=""></img>
            </div>
            <Typography className={classes.title} variant="h3">
              Submit Project Photo
            </Typography>
            <Typography>
              After completing your project, take a screenshot of your project and upload it here.
            </Typography>
            <div className={classes.button} variant="contained" color="secondary">
              <ImgageIcon />
              <div>Send Photo</div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="column">
            <div className={classes.image}>
              <img src={CallImage} alt=""></img>
            </div>
            <Typography className={classes.title} variant="h3">
              Submit Project Photo
            </Typography>
            <Typography>
              After completing your project, take a screenshot of your project and upload it here.
            </Typography>
            <div className={classes.button} variant="contained" color="secondary">
              <ImgageIcon />
              <div>Call Teacher</div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
