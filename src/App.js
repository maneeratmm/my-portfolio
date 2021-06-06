import React from 'react'
import './App.css';
import Navbar from './components/Navbar'

//Contents
import Home from './contents/Home'
import About from './contents/About'
import Education from './contents/Education'
import Experience from './contents/Experience'
import Certificate from './contents/Certificate'
import Skillls from './contents/Skills'
import Contact from './contents/Contact'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/education">
          <Education />
        </Route>
        <Route exact path="/skills">
          <Skillls />
        </Route>
        <Route exact path="/experience">
          <Experience />
        </Route>
        <Route exact path="/certificate">
          <Certificate />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </div>
    </Router>
  );
}

export default App;
