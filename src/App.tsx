import React from 'react';
import Header from './components/Header';
import Routing from './store/Routing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper">
        <Header/>
        <Routing/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
