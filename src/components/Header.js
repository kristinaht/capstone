import React from "react";
import { Link } from 'react-router-dom';

// function Header(){
//   return (
//     <React.Fragment>
//       <h1>Contract Creator</h1>
//       <ul>
//         <li>
//           <Link to='/'>Home</Link>
//         </li>
//         <li>
//           <Link to='/signin'>Sign In</Link>
//         </li>
//       </ul>
//     </React.Fragment>
//   );
// }

// export default Header;

function Header(){
  const headerStyles = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100vw',
    // height: '20vh',
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // flexWrap: 'wrap',
    borderBottom: '3px solid #388087',
    backgroundColor: 'rgb(198,229,214)',
    color:  '#388087',
    fontSize: '2rem',
    fontFamily: "'Oswald', sans-serif"
  }

  return (
    <React.Fragment>
      <div style={headerStyles}>
        <h1>ContractOR</h1>
      {/* <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/signin'>Sign In</Link>
        </li>
      </ul> */}
      </div>
    </React.Fragment>
  );
}

export default Header;