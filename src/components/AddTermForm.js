import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';
import { Form, Button } from 'react-bootstrap';

function AddTermForm(props) {

  const firestore = useFirestore();
  
  function addTermToFirestore(event) {

    const formStyles = {
      display: 'block',
      width: '100%',
      borderRadius: '5px'
    }

    event.preventDefault();
    props.onNewTermCreation();
   
    return firestore.collection('terms').add(
      {
        name: event.target.name.value,
        parties: event.target.parties.value,
        whereas: event.target.whereas.value,
        sow: event.target.sow.value,
        govLaw: event.target.govLaw.value
      }
    )
  }
  return(
    <React.Fragment>
      <Form onSubmit={addTermToFirestore}>
        <Form.Group>
          <Form.Label>Document name:</Form.Label>
          <Form.Control type='text' name='name' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Parties:</Form.Label>
          <Form.Control type='text' name='parties' placeholder='This contract is between...' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>WHEREAS clause:</Form.Label>
          <Form.Control type='text' name='whereas' placeholder='WHEREAS...' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Scope of Work:</Form.Label>
          <Form.Control type='text' name='sow' placeholder='...' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Governing law:</Form.Label>
          <Form.Control type='text' name='govLaw' placeholder='All matters and actions in this agreement shall be governed by...' required/>
        </Form.Group>
        <Button variant='outline-dark' type='submit'>Add new terms</Button>
      </Form>
    </React.Fragment>
  )
}

export default AddTermForm;