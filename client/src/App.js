import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import InfoSection from './components/InfoSection/InfoSection';
import Navbar from './components/Navbar/Navbar';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <InfoSection />
    </BrowserRouter>
  )
}

export default App;
