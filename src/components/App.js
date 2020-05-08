import React from 'react';
import './App.css';
import Header from "./Header";
import TermsControl from "./TermsControl"; 
import Footer from "./Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <TermsControl /> 
      <Footer />
    </React.Fragment>
  );
}

export default App;
