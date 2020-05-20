import React from "react";
import { Card } from 'react-bootstrap';

function Home(){  

  const termListStyle = {
    // position: 'relative',
   
    height: '100%',
    // margin: 'auto',
    // top: '5vh',
    // display: 'flex',
    // justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '100%',
    backgroundColor: '#D3D3D3',

  

  }

  return (
    <React.Fragment>
      <div style={termListStyle}>
        <h1>Welcome!</h1>
      </div>
    </React.Fragment>
  );
}

export default Home;