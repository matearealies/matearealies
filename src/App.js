import React from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Magazine from "./components/Magazine/Magazine";
import { Terminus } from "./components/Terminus/Terminus";
import 'typeface-roboto';
// import { CreampieCathy } from "./components/Sites";

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/magazine" component={Magazine} />
        <Route path="/" component={Terminus} />
      </Switch>
    </HashRouter>
  );
}

export default App;
