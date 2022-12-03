import React from "react";
import { Button } from "@material-ui/core";

const MySuperSecretProject = props => {
  const { history } = props;
  return (
    <>
      <Button onClick={() => history.push("/glib/projects/mysupersecretproject/mysupersecretfile")}>MySuperSecretFile</Button>
    </>
  );
};

export default MySuperSecretProject;
