import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import BestsellersPage from './BestsellersPage';
import BestsellersDetailPage from './BestsellersDetailPage';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <BestsellersPage />
          </Route>
          <Route exact path="/BestsellersDetailPage/:id">
            <BestsellersDetailPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

