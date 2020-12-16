import { Card, Checkbox, makeStyles, Typography } from "@material-ui/core";
import { teacherRequestStudent } from "actions/teacherActions";
import Error from "components/Error";
import Loading from "components/Loading";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { timeFormat, dateFormat } from "utils";

const useStyles = makeStyles((theme) => ({
  title: { marginBottom: theme.spacing(3) },
  card: {
    minHeight: 60,
    width: "60vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "1rem",
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(3),
  },
  grow: {
    flexGrow: 1,
  },
  date: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
}));

export default function ProjectSubmission() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const teacherHelpReq = useSelector((state) => state.teacherHelpReq);
  const { studentsInfo, loading, error } = teacherHelpReq;

  useEffect(() => {
    if (userInfo) {
      dispatch(teacherRequestStudent(userInfo.UserID));
    }
  }, [dispatch, userInfo]);

  if (!userInfo) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div>
        <Typography variant="h3" align="left" className={classes.title}>
          PROJECT SUMBMISSION
        </Typography>
      </div>
      {loading ? (
        <Loading open={loading} />
      ) : error ? (
        <Error />
      ) : studentsInfo ? (
        studentsInfo.map((student) => (
          <div className="row">
            <Checkbox color="default" />
            <Card className={classes.card}>
              <img src={student.ProfilePic} alt="" />
              <div className={classes.grow}>
                {student.FirstName} needs help with {(student.Gender = "M" ? "his" : "her")}{" "}
                projects
              </div>
              <div className={classes.date}>
                <div>{dateFormat(student.DateCreated)}</div>
                <div>{timeFormat(student.DateCreated)}</div>
              </div>
            </Card>
          </div>
        ))
      ) : null}
    </>
  );
}
