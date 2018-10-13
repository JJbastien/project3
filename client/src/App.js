import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import RegisterAdmin from './components/admin/RegisterAdmin';
import LoginAdmin from './components/admin/LoginAdmin'
import './App.css';


class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/home" component={Home} />
        <div className="container">
          <Route exact path="/register" component={RegisterAdmin} />
          <Route exact path="/login" component={LoginAdmin} />
        </div>
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;