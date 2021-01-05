import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Soefiles from "./components/seofiles/soefiles";
import Teams from "./components/teams/teams";
import Apis from "./components/api/apis";
import Home from "./components/home/home";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/soefiles">
            <Soefiles />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/apis">
            <Apis />
          </Route>        
         
        </Switch>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
