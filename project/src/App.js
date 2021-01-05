import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Soefiles from "./components/seofiles/soefiles";
import Teams from "./components/teams/teams";
import Apis from "./components/api/apis";
import Home from "./components/home/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Soefiles />
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
  );
}

export default App;
