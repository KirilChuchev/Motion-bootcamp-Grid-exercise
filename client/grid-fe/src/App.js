import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';

const DbAllRecords = lazy(() => import('./DbAllRecords'));
const DbDeleteRecord = lazy(() => import('./DbDeleteRecord'));
const DbFilterRecords = lazy(() => import('./DbFilterRecords'));
const DbSortAllRecords = lazy(() => import('./DbSortAllRecords'));

function App() {

  const [data, setData] = useState([]);

  return (
    <div className="App">

      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <table>
            <thead>
              <NavBar />
            </thead>
            <tbody>
              <Switch>
                <Route exact path="/" component={DbAllRecords} />
                <Route exact path="/all" component={DbAllRecords} />
                <Route exact path="/all/:docId" component={DbAllRecords} />
                <Route exact path="/delete/:docId" component={DbDeleteRecord} />
                <Route path="/filter/:criteria" component={DbFilterRecords} />
                <Route exact path="/sort/:criteria" component={DbSortAllRecords} />
              </Switch>
            </tbody>
          </table>
        </Suspense>
      </Router>

    </div>

  );
}

export default App;