import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';
import { Container, Form, Button, Card, CardDeck } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function AddTermForm(props) {

  const formStyles = {
    display: 'flex',
    // width: '80%',
    borderRadius: '5px',
  }
  
  const cardStyle ={
    display: 'block',
    textAlign: 'justify',
    border: '2px solid white',
    width: '50%',
    padding: '2%',
    margin: '1%',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.30)',
    color: '#929296',
    fontSize: '2rem',
  }


  const firestore = useFirestore();
  
  const indemnityDefault = "Contractor shall be responsible for all damage to property, injury to persons, and loss, expense, inconvenience, and delay which may be caused by, or result from, the conduct of its work under this Contract, or from any act, omission, or neglect of the Contractor, its subcontractors, or employees.";
  const paymentTermDefault = "Unless otherwise expressly provided for in this Contract, payment shall be made after completion of Services. Contractor shall submit invoices to the Department.";
  // MOVE THIS TO EDIT FORM AS OPTION OR SOMETHING: const govLawDefault = "All matters arising out of or relating to this Contract shall be governed by and construed in accordance with the internal laws of the State of Oregon without giving effect to any choice or conflict of law provision or rule (whether of the State of Oregon or any other jurisdiction)."

  function addTermToFirestore(event) {

    event.preventDefault();
    props.onNewTermCreation();

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

        <Card style={cardStyle}>
          <Form.Group>
            <Form.Label >Document name:</Form.Label>
            <Form.Control className='text' style={formStyles} type='text' name='name' required/>
          {/* </Form.Group>
          <Form.Group> */}
            <Form.Label>Contractor name:</Form.Label>
            <Form.Control className='text' style={formStyles} type='text' name='contractor' placeholder='...' required/>
            <Form.Label>Contract start date:</Form.Label>
          <Form.Control className='text' style={formStyles} type='text' name='startDate' placeholder='...' required/>
          <Form.Label>Contract end date:</Form.Label>
          <Form.Control className='text' style={formStyles} type='text' name='endDate' placeholder='...' required/>
          </Form.Group>
        </Card>
        <Card style={cardStyle}>
        <Form.Group>
          <Form.Label>What is the total amount to be paid to the Contractor?</Form.Label>
          <Form.Control className='text' style={formStyles} type='text' name='fee' placeholder='...' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Payment is issued how many days after receiving an invoice??</Form.Label>
          <Form.Control className='text' style={formStyles} type='text' name='paymentDays' defaultValue='45' required/>
        </Form.Group>
        </Card>
        <Card style={cardStyle}>
        <Form.Group>
          <Form.Label>Minimum GL insurance level per occurrence</Form.Label>
          <textarea className='text' style={formStyles} type='text' name='glMin' defaultValue='1,000,000' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Annual aggregate GL insurance</Form.Label>
          <textarea className='text' style={formStyles} type='text' name='glMax' defaultValue='3,000,000' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Minimum PL insurance level per occurrence</Form.Label>
          <textarea className='text' style={formStyles} type='text' name='plMin' defaultValue='3,000,000' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Annual aggregate PL insurance</Form.Label>
          <textarea className='text' style={formStyles} type='text' name='plMax' defaultValue='5,000,000' required/>
        </Form.Group>
        </Card>
        <Card style={cardStyle}>
        <Form.Group>
          <Form.Label style={formStyles}>Scope of Work:</Form.Label>
          <textarea  className='textarea' style={formStyles} type='text' name='sow' placeholder='...' required/>
          <Form.Label style={formStyles}>Indemnification clause:</Form.Label>
          <textarea className='textarea' style={formStyles} type='text' name='indemnity' defaultValue={indemnityDefault} required/>
          <Form.Label style={formStyles}>Governing law(State):</Form.Label>
          <Form.Control className='text' style={formStyles} type='text' name='govLaw' placeholder='...' required/>
        </Form.Group>
        </Card>
      
        <Button style={formStyles} variant='outline-success' type='submit'>Add new terms</Button>
      </Form>
     
    </React.Fragment>
  )
}

export default AddTermForm;