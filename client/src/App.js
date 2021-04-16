import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import InfoSection from './components/InfoSection/InfoSection';
import Navbar from './components/Navbar/Navbar';


const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Header />
          <InfoSection />
        </Route>
        <Route exact path={["/login", "/register"]}>
          <Auth />
        </Route>
      </Switch>
    </>
  )
}

export default App;
