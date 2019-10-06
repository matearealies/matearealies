import React from 'react';
import './App.css';
import { useRoutes } from 'hookrouter';
import { Mattereal, Cookie } from './components/Mattereal';
import Magazine from './components/Magazine/Magazine';
import Reader from './components/Stash/Reader';


function App() {
  // const routes = {
  //   '/': () => <Magazine />,
  //   '/cookie': () => <Cookie />,
  //   '/mattereal': () => <Mattereal />,  
  //   '/reader': () => <Reader />
  // };
  
  // const routeResult = useRoutes(routes);
    
  // return routeResult; 
  return (<Magazine />)
}

export default App;
