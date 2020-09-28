import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';
import Chats from './components/Chats';
import ChatScreen from './components/ChatScreen';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/chats/:person'>
            <Header backButton='/chats' />
            <ChatScreen />
          </Route>
          <Route exact path='/chats'>
            <Header backButton='/' />
            <Chats />
          </Route>
          <Route path='/'>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;