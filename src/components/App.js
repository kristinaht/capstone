import React from 'react';
import './App.css';
import Header from "./Header";
import TermControl from "./TermControl"; 
import Footer from "./Footer";
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Switch>
//         <Route path='/'>
//           <Home />
//         </Route>
//         <Route path='/termcontrol'>
//           <TermControl />
//         </Route>
//       </Switch>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

function App() {
  return (
    <React.Fragment>
    <Router>
        <Header/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/termcontrol">
            <TermControl />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      <Footer/>
    </Router>
    </React.Fragment>
  );
}

export default App;