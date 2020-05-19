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
        paymentTerm: event.target.paymentTerm.value,
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
          <Form.Label style={formStyles} >Who are you contracting with? Enter Contractor name:</Form.Label>
          <Form.Control style={formStyles} type='text' name='contractor' placeholder='Contractor name...' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label style={formStyles} >What is the total amount to be paid to the Contractor? Enter fee amount:</Form.Label>
          <Form.Control style={formStyles} type='text' name='fee' placeholder='Contract fee amount' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label style={formStyles} >Enter the contract start date:</Form.Label>
          <Form.Control style={formStyles} type='text' name='startDate' placeholder='...' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label style={formStyles} >Enter the contract end date:</Form.Label>
          <Form.Control style={formStyles} type='text' name='endDate' placeholder='...' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label style={formStyles}>Scope of Work:</Form.Label>
          <Form.Control style={formStyles} type='text' name='sow' placeholder='...' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label style={formStyles}>Add Indemnification clause:</Form.Label>
          <textarea style={formStyles} type='text' name='indemnity' defaultValue={indemnityDefault} required/>
        </Form.Group>
        <Form.Group>
          <Form.Label style={formStyles}>Template Payment Term clause:</Form.Label>
          <textarea readOnly style={formStyles} type='text' name='paymentTerm' defaultValue={paymentTermDefault}/>
        </Form.Group>
        <Form.Group>
          <Form.Label style={formStyles}>How many days after invoice is received do you issue payment?</Form.Label>
          <Form.Control style={formStyles} type='text' name='paymentDays' placeholder='Enter # of days...' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label style={formStyles}>Enter minimum GL insurance level per occurrence</Form.Label>
          <textarea style={formStyles} type='text' name='glMin' placeholder='GL min/occurrence' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label style={formStyles}>Enter annual aggregate GL insurance</Form.Label>
          <textarea style={formStyles} type='text' name='glMax' placeholder='GL annual aggregate' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label style={formStyles}>Enter minimum PL insurance level per occurrence</Form.Label>
          <textarea style={formStyles} type='text' name='plMin' placeholder='PL min/occurrence' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label style={formStyles}>Enter annual aggregate PL insurance</Form.Label>
          <textarea style={formStyles} type='text' name='plMax' placeholder='PL min/occurrence' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label style={formStyles}>Governing law:</Form.Label>
          <Form.Control style={formStyles} type='text' name='govLaw' placeholder='Enter State here...' required/>
        </Form.Group>
        <Button style={formStyles} variant='outline-dark' type='submit'>Add new terms</Button>
      </Form>
    </React.Fragment>
  )
}

export default AddTermForm;