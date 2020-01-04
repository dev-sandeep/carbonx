import React from 'react';
import './App.css';
import DesktopMessage from './Pages/DesktopMessage'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Feed from './Pages/Feeds'
import Community from './Pages/Community'
import Profile from './Pages/Profile'
import Analysis from './Pages/Analysis'
import Input from './Pages/Input'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { BaseContextProvider } from './ContextApi/BaseContext'

function App() {
  return (
    <div className="">
      <BaseContextProvider>
        <Router>
          <DesktopMessage />
          <div className="mobile-only">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/feed" component={Feed} />
              <Route exact path="/community" component={Community} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/analysis" component={Analysis} />
              <Route exact path="/input" component={Input} />
            </Switch>
          </div>
        </Router>

      </BaseContextProvider>
    </div>
  );
}

export default App;
