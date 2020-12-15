import { projectbuilder } from "actions/projectActions";
import Error from "components/Error";
import Loading from "components/Loading";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function VideoTutorial() {
  const dispatch = useDispatch();
  const { projectid } = useParams();
  const projectBuilder = useSelector((state) => state.projectBuilder);
  const { projectsInfo, loading, error } = projectBuilder;
  useEffect(() => {
    if (projectid) {
      dispatch(projectbuilder(projectid));
    }
  }, [dispatch, projectid]);

  console.log(projectsInfo);
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/80961102"
          width="640"
          height="360"
          frameborder="0"
          allowfullscreen
        ></iframe>
      )}
    </>
  );
}
