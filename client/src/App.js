import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ProjectState from "./context/project/ProjectState";
import "./App.css";

const App = () => {
  return (
    <ProjectState>
      <Router>
        <Fragment>
          <div className='container'>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ProjectState>
  );
};

export default App;
