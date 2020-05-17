import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';


function Term(props){
  return(


    // <React.Fragment>
    //   <div onClick = {() => props.whenTermClicked(props.id)}>
    //     <p><em>{props.name}</em>.  {props.body}</p>
    //     {/* <button onClick = {()=> props.whenTermClicked(props.id)}>DETAILS</button> */}
    //   </div>
    //   <hr/>
    // </React.Fragment>
<Modal
  {...props}
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
  <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter">
      TERM DETAILS
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <h4>{ props.name }</h4>
    <p>{ props.body }</p>
  </Modal.Body>
  <Modal.Footer>
    <Button onClick={props.onHide}>Close</Button>
  </Modal.Footer>
</Modal>
  )
}


Term.propTypes = {

}
export default Term;


// return (
// );