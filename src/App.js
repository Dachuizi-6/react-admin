import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./views/Login";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Login}></Route>
      </Switch>
    );
  }
}

export default App;
