import React from "react";
import { Button } from "@material-ui/core";

const Projects = props => {
  const { history } = props;
  return (
    <>
      <Button onClick={() => history.push("/glib/projects/MySuperSecretProject")}>MySuperSecretProject</Button>
      <Button onClick={() => history.push("/glib/project/fileBtxt")}>FileBTxt</Button>
    </>
  );
};

export default Projects;
