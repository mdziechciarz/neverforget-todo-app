import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';

import Auth from './components/views/Auth/Auth';
import Main from './components/views/Main/Main';
import Welcome from './components/views/Welcome/Welcome';

import './scss/style.scss';

const App = () => {
  const [isUserLogged, setIsUserLogged] = useState(true);
  return (
    <>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/">
          {isUserLogged ? (
            <Main />
          ) : (
            <Welcome />
          )}
        </Route>
        <Route exact path={["/login", "/signup"]}>
          <Auth />
        </Route>
      </Switch>
    </>
  )
}

export default App;
