import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react';
import ChatScreen from './screens/ChatScreen';
import AuthProvider from './components/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import ChatsScreen from './screens/ChatsScreen';
import SwipeScreen from './screens/SwipeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SingUpScreen';
import ProfileScreen from './screens/ProfileScreen';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path='/chats/:id' component={ChatScreen} />
          <PrivateRoute exact path='/chats' component={ChatsScreen} />
          <PrivateRoute exact path='/home' component={SwipeScreen} />
          <PrivateRoute exact path='/profile' component={ProfileScreen} />
          <Route path='/signup' component={SignUpScreen} />
          <Route path='/' component={LoginScreen} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;