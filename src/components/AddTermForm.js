import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';
import { Form, Button } from 'react-bootstrap';

function AddTermForm(props) {

  const formStyles = {
    display: 'block',
    width: '100%',
    borderRadius: '5px'
  }
  const firestore = useFirestore();
  
  function addTermToFirestore(event) {


    event.preventDefault();
    props.onNewTermCreation();

    const indemnityDefault = ""
   
    return firestore.collection('terms').add(
      {
        name: event.target.name.value,
        contractor: event.target.contractor.value,
        fee: event.target.fee.value,
        startDate: event.target.startDate.value,
        endDate: event.target.endDate.value,
        sow: event.target.sow.value,
        indemnity: event.target.indemnity.value,
        paymentDays: event.target.paymentDays.value,
        glMin: event.target.glMin.value,
        glMax: event.target.glMax.value,
        plMin: event.target.plMin.value,
        plMax: event.target.plMax.value,
        govLaw: event.target.govLaw.value
      }
    )
  }
  return(
    <React.Fragment>
      <Form onSubmit={addTermToFirestore}>
        <Form.Group>
          <Form.Label style={formStyles}>Document name:</Form.Label>
          <Form.Control style={formStyles} type='text' name='name' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label style={formStyles} >Parties:</Form.Label>
          <Form.Control style={formStyles} type='text' name='parties' placeholder='This contract is between...' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label style={formStyles} >WHEREAS clause:</Form.Label>
          <Form.Control style={formStyles} type='text' name='whereas' placeholder='WHEREAS...' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label style={formStyles}>Scope of Work:</Form.Label>
          <Form.Control style={formStyles} type='text' name='sow' placeholder='...' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label style={formStyles}>Governing law:</Form.Label>
          <Form.Control style={formStyles} type='text' name='govLaw' placeholder='All matters and actions in this agreement shall be governed by...' required/>
        </Form.Group>
        <Button style={formStyles} variant='outline-dark' type='submit'>Add new terms</Button>
      </Form>
    </React.Fragment>
  )
}

export default AddTermForm;