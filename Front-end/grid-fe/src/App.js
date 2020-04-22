import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar.jsx';
import DbRecords from './DbAllRecords.jsx';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';



// const Home = lazy(() => import('./routes/Home'));
// const About = lazy(() => import('./routes/About'));

const DbAllRecords = lazy(() => import('./DbAllRecords.jsx'));
const DbDeleteRecord = lazy(() => import('./DbDeleteRecord.jsx'));
const DbFilterRecords = lazy(() => import('./DbFilterRecords.jsx'));

function App() {

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:5050/all')
  //     .then(res => res.json())
  //     // .then(data => console.log(data[0]))
  //     .then(docs => setData(docs))
  // }, []);

  // const allData = lazy(async () => await fetch('http://localhost:5050/all')
  //   .then(res => res.json())
  //   // .then(data => console.log(data[0]))
  //   .then(docs => setData(docs)))

  // function Child() {
  //   // We can use the `useParams` hook here to access
  //   // the dynamic pieces of the URL.
  //   let { id } = useParams();

  //   return (
  //     <div>
  //       <h3>ID: {id}</h3>
  //     </div>
  //   );
  // }

  // function getParams() {
  //   // We can use the `useParams` hook here to access
  //   // the dynamic pieces of the URL.
  //   let params = useParams();s

  //   return params;
  // }

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
                  {/* <Route exact path="/" component={DbAllRecords} /> */}
                  <Route path="/all" component={DbAllRecords} />
                  {/* <Route path="/all/:id" component={DbAllRecords} /> */}
                  <Route exact path="/delete/:docId" component={DbDeleteRecord} />
                  <Route path="/filter/:criteria" component={DbFilterRecords} />
                  {/* <Route exact path="/sort/:criteria" component={DbRecords} /> */}
                </Switch>
            </tbody>
          </table>

              </Suspense>
      </Router>

    </div>

  );
}

export default App;