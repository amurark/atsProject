import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import AuthContext from './context/auth-context';
import MainNavigation from './components/Navigation/MainNavigation';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import PromotionsPage from './pages/Promotions';
import AuthPage from './pages/Auth';
import './App.css';

class App extends Component {
  state = {
    token: null,
    userId: null
  }

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
  }

  logout = () => {
    this.setState({token: null, userId: null});
  }


  render() {
    return (
      <BrowserRouter>
        <AuthContext.Provider value={{
          token: this.state.token,
          userId: this.state.userId,
          login: this.login,
          logout: this.logout
        }}>
          <MainNavigation />
          <main className="main-content">
            <Switch>
              <Route path="/home" component={HomePage} />
              {!this.state.token && (
                <Route path="/auth" component={AuthPage} />
              )}
              {!this.state.token && (
                <Route path="/profile" component={ProfilePage} />
              )}
              <Route path="/promotions" component={PromotionsPage} />
              <Redirect path="/" to="/home" exact />
              {this.state.token && (
                <Redirect path="/auth" to="/home" exact />
              )}
              
            </Switch>
          </main>
        </AuthContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
