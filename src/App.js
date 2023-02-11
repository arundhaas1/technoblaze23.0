import React from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Events from './Components/Events/Events';
import Register from './Components/Register/Register';
import ScrollToTop from './ScrollToTop';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Router className="app">
      <ScrollToTop />
     <Switch>
      <Route path="/events" component={Events} />
      <Route path="/register" component={Register} />
      <Route path="/contact" component={Contact} />
      <Route exact path="/" component={Home} />
     </Switch>
    </Router>
  );
}

export default App;

