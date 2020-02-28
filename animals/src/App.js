import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import AnimalDashboard from "./components/AnimalDashboard"

import Login from "./components/Login.js";
import Header from "./components/Header.js";
import PrivateRoute from "./utils/PrivateRoute"

export default function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/creatures" component={AnimalDashboard} />
      </Switch>
    </div>
  );
};
