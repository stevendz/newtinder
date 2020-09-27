import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react';
import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path='/chat'>
            <h1>I am the chat page <span role='img' aria-label='Rocket'>💭</span></h1>
          </Route>
          <Route path='/'>
            <TinderCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;