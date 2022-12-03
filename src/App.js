import React from "react";
import "./styles.css";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";
import Glib from "./glib";
import Projects from "./glib_folder/projects"
import MySuperSecretProject from "./glib_folder/super_secret_folder/mysupersecretproject";
import MySuperSecretFile from "./glib_folder/super_secret_folder/mysupersecretfile";
import FileATxt from "./glib_folder/fileAtxt";
import FileBTxt from "./glib_folder/fileBtxt";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";

export default function App() {
  return (
    <>
      <Breadcrumbs />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/glib" render={props => <Glib {...props} />} />
        <Route exact path="/glib/projects" render={props => <Projects {...props} />} />
        <Route exact path="/glib/projects/mysupersecretproject" render={props => <MySuperSecretProject {...props} />} />
        <Route
          exact
          path="/glib/fileAtxt"
          render={props => <FileATxt {...props} />}
        />
        <Route
          exact
          path="/glib/fileBtxt"
          render={props => <FileBTxt {...props} />}
        />
        <Route
          exact
          path="/glib/project/fileBtxt"
          render={props => <FileBTxt {...props} />}
        />
        <Route
          exact
          path="/glib/projects/mysupersecretproject"
          render={props => <MySuperSecretProject {...props} />}
        />
        <Route
          exact
          path="/glib/projects/mysupersecretproject/mysupersecretfile"
          render={props => <MySuperSecretFile {...props} />}
        />
      </Switch>
      <Footer />
    </>
  );
}
