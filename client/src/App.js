import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import Info from "./components/pages/Info";
import Admin from "./components/pages/Admin";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Notifications from "./components/layout/Notifications";
import PrivateRoute from "./components/routing/PrivateRoute"

import ProjectState from "./context/project/ProjectState";
import AuthState from "./context/auth/AuthState";
import NotificationState from "./context/notification/NotificationState";
import setAuthToken from "./util/setAuthToken";
import "./App.scss";

setAuthToken(localStorage.token);

const App = () => {
  return (
    <AuthState>
      <ProjectState>
        <NotificationState>
          <Router>
            <Fragment>
              <div className='container'>
                <Navbar />
                <Notifications />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/work' component={Work} />
                  <Route exact path='/skills' component={Skills} />
                  <Route exact path='/contact' component={Contact} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/info' component={Info} />
                  <PrivateRoute exact path='/admin' component={Admin} />
                  <PrivateRoute exact path='/admin/register' component={Register} />
                  <Route exact path='/admin/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </NotificationState>
      </ProjectState>
    </AuthState>
  );
};

export default App;
