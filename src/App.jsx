import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Solutions from './Components/Solutions/Solutions.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import FlowChart from './Components/FlowChart/FlowChart.jsx';
import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Solutions/>
      <FlowChart/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
