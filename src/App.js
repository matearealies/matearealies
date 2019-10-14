import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import Magazine from './components/Magazine/Magazine';
import { CreampieCathy } from './components/Sites'

function App() {
  return (
    <HashRouter basename='/'>
      <Switch>
        <Route exact path="/" component={Magazine} />
        <Route path="/creampieCathy" component={CreampieCathy} />
      </Switch>      
    </HashRouter>
  )
}

export default App;
