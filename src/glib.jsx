import React from "react";
import { Button } from "@material-ui/core";

const Glib = props => {
  const { history } = props;
  return (
    <>
      <Button onClick={() => history.push("/glib/fileAtxt")}>FileATxt</Button>
      <Button onClick={() => history.push("/glib/fileBtxt")}>FileBTxt</Button>
      <Button onClick={() => history.push("/glib/projects")}>Projects</Button>
    </>
  );
};

export default Glib;
