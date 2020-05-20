import React from 'react';

const Footer = () => {

  const footerStyle = {
    // // position: 'absolute',
    // top: '0',
    // left: '0',
    // width: '100vw',
    // height: '10vh',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // // flexWrap: 'wrap',
    // borderBottom: '3px solid #388087',
    // backgroundColor: 'rgb(198,229,214)',
    // color:  '#388087',
    // fontSize: '2rem',
    
    fontFamily: "'Fira Sans', sans-serif",

    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100vw',
    backgroundColor: '#acb7ae',
    color: '#f6f6f2',
    padding: '0.5%',
    paddingLeft: '2%'
  }



  return (
    <div style={footerStyle}>
      <p>Ⓒ FooterStuff</p>
    </div>
  )
}

export default Footer;