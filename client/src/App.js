import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Admin from "./components/pages/Admin";
import ProjectState from "./context/project/ProjectState";
import AuthState from "./context/auth/AuthState";
import "./App.css";

const App = () => {
  return (
    <AuthState>
      <ProjectState>
        <Router>
          <Fragment>
            <div className='container'>
              <Navbar />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/work' component={Work} />
                <Route exact path='/admin' component={Admin} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ProjectState>
    </AuthState>
  );
};

export default App;
