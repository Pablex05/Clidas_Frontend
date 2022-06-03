import React from 'react';
import './assetss/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import HomePage from './components/HomePage';

import Analisis from './components/Analisis/Analisis';
import ConfiguracionRutinas from './components/ConfiguracionRutinas/Configuracion';


function App() {
  return (
      <React.Fragment>
          <Router>
              <Switch>
                  <Route path="/clidas" exact render={props => (<HomePage {...props}/>)}></Route>
                  <Route path="/clidas/Analisis" exact render={props => (<Analisis {...props}/>)}></Route>
                  <Route path="/clidas/configuracion/rutinas" exact render={props => (<ConfiguracionRutinas {...props}/>)}></Route>
                  
              </Switch>
          </Router>
      </React.Fragment>
  );
}

export default App;
