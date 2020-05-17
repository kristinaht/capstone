import React from 'react';
import './App.css';
import Header from "./Header";
import TermControl from "./TermControl"; 
import Footer from "./Footer";
import Signin from './Signin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/'>
          <TermControl />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

    // <React.Fragment>
    //   <Header />
    //   <TermControl /> 
    //   <Footer />
    // </React.Fragment>