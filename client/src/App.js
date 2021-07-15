import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Auth from './components/views/Auth/Auth';
import Main from './components/views/Main/Main';
import Welcome from './components/views/Welcome/Welcome';

import './scss/style.scss';

const App = () => {
  const isUserLogged = useSelector(state => state.user.isLogged);
  return (
    <>
      <Switch>
        <Route exact path="/">
          {isUserLogged ? (
            <Main />
          ) : (
            <Welcome />
          )}
        </Route>
        <Route path={["/login", "/signup"]}>
          {isUserLogged && <Redirect to="/" />}
          <Auth />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default App;
