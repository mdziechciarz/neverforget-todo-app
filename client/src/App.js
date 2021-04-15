import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import InfoSection from './components/InfoSection/InfoSection';
import Navbar from './components/Navbar/Navbar';


const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App;
