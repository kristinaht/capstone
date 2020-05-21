import React from "react";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home(){  

  

  const header = {
    fontFamily: "'Yanone Kaffeesatz', sans-serif",
  }

 
  return (
    <React.Fragment>
      <div className='cHome' >
        
          <h1 style={header} className='hHome'>ContractOR</h1>
          <Link to="/termcontrol" className='link'>Go to My Contracts</Link>
        
      </div>
    </React.Fragment>
  );
}

export default Home;