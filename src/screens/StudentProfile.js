import React, { useEffect } from "react";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { teacherProfileReq } from "actions/teacherActions";
import Loading from "components/Loading";
import { Redirect } from "react-router-dom";
import Error from "components/Error";

// TODO: fix flex wrap

const useStyles = makeStyles((theme) => ({
  card: {
    width: 150,
    height: 150,
    margin: theme.spacing(2),
    flex: "0 0 100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: "15%",
  },
  cardWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    overflowY: "auto",
    overflowX: "hidden",
  },
  image: {
    height: 120,
    width: 120,
  },
}));

export default function StudentProfile(image) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const teacherReqProfile = useSelector((state) => state.teacherReqProfile);
  const { studentsInfo, loading, error } = teacherReqProfile;

  useEffect(() => {
    if (userInfo) {
      dispatch(teacherProfileReq(userInfo.UserID));
    }
  }, [dispatch, userInfo]);

  if (!userInfo) {
    return <Redirect to="/" />;
  }

  return (
    <>
      {loading ? (
        <Loading open={loading} />
      ) : error ? (
        <Error />
      ) : (
        <div className="cardWrapper">
          {studentsInfo
            ? studentsInfo.map((student) => (
                <Paper elevatio={4} key={student.UserID} classes={{ rounded: classes.card }}>
                  <img className={classes.image} src={student.ProfilePic} alt="" />
                  <Typography variant="h3">
                    {student.FirstName} {student.LastName}
                  </Typography>
                </Paper>
              ))
            : null}
        </div>
      )}
    </>
  );
}
