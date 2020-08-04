import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from './shared/redux/reducer';

import Home from './components/Home';

import Doctors from './components/doctors';
import FadRenderProps from './components/FadRenderProps';
import DoctorProfile from './components/DoctorProfile';

import './App.css';

let store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/fad">
                <Doctors />
              </Route>
              <Route path="/fad-render-prop">
                <FadRenderProps />
              </Route>
              <Route path="/doctor-profile">
                <DoctorProfile />
              </Route>
            </Switch>
          </div>
        </Router>

      </div>
    </Provider>
  );
}

export default App;
