import React from 'react';
import './App.css';
import Login from "./components/Login/Login";
import DataPage from './components/DataPage/DataPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/data" component={DataPage} />
        </Switch>
      </Router>
  );
}

export default App;
