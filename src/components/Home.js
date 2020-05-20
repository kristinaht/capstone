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
    // backgroundColor: '#D3D3D3',
  }

  const hHomeStyle = {
    padding: '5',
    border: '3px solid #388087'
  }
  return (
    <React.Fragment>
      <div style={termListStyle}>
        <div >
          <h1 style={hHomeStyle}>Welcome!</h1>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;