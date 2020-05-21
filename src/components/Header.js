import React from "react";
import { Link } from 'react-router-dom';

function Header(){

  const headerStyles = {
    // position: 'absolute',
    top: '0',
    left: '0',
    width: '100vw',
    height: '10vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   
    color: '#d4d4dc',
    fontSize: '2rem',
    fontFamily: "'Oswald', sans-serif",
    fontFamily: "'Yanone Kaffeesatz', sans-serif"
  }

  return (
    <React.Fragment>
      <div style={headerStyles}>
        <h1>ContractOR</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/termcontrol">Terms</Link>
            </li>
         
          </ul>
        </nav>
    
          {/* <Link to='/'>Home</Link>
          <Link to='/termcontrol'>My Contracts</Link> */}
        
      </div>
    </React.Fragment>
  );
}

export default Header;