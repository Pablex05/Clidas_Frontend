import React from 'react';
import './assetss/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import HomePage from './components/HomePage';

import Analisis from './components/Analisis/Analisis';
import EditAnalisis from './components/Analisis/EditAnalisis'

function App() {
  return (
      <React.Fragment>
          <Router>
              <Switch>
                  <Route path="/" exact render={props => (<HomePage {...props}/>)}></Route>
                  <Route path="/analisis" exact render={props => (<Analisis {...props}/>)}></Route>
                  <Route path="/actor/Edit/:id" exact render={props => (<EditAnalisis {...props}/>)}></Route>

              </Switch>
          </Router>
      </React.Fragment>
  );
}

export default App;
