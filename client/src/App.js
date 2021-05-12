import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import InfoSection from './components/InfoSection/InfoSection';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

import './scss/style.scss';

const App = () => {
  const [isUserLogged, setIsUserLogged] = useState(true);
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          {isUserLogged ? (
            <Main />
          ) : (
            <>
              <Header />
              <InfoSection />
            </>
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
