import React from "react";
import { Button } from "@material-ui/core";

const Home = props => {
  const { history } = props;
  return (
    <>
      <Button onClick={() => history.push("/glib")}>Glib</Button>
    </>
  );
};

export default Home;
