import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


function Term(props){

  const termStyle = {
    textAlign: 'center',
    border: '2px solid rgb(70,108,82)',
    width: '400px',
    height: '400px',
    padding: '2%',
    margin: '1%',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.10)'
  }


  return(
    <React.Fragment>
      <Card style={termStyle} onClick = {() => props.whenTermClicked(props.id)}>
        <p>{props.name}</p>
        <p>{props.contractor}</p>
        {/* <button onClick = {()=> props.whenTermClicked(props.id)}>DETAILS</button> */}
      </Card>
      <hr/>
    </React.Fragment>
  )
}


Term.propTypes = {

}
export default Term;


