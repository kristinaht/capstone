import React from 'react';
import { useFirestore } from 'react-redux-firebase';
import { Form, Button } from 'react-bootstrap';

function EditTermForm(props) {

  const formStyles = {
    display: 'block',
    width: '100%',
    borderRadius: '5px'
  }

  const firestore = useFirestore();

  const { term } = props;

  function handleEditTermFormSubmission(event) {
    event.preventDefault();
    props.onEditTerm();
    const propertiesToUpdate = {
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
    return firestore.update({ collection: 'terms', doc: term.id}, propertiesToUpdate);
  }

  return(
    <React.Fragment>
     <Form  onSubmit={handleEditTermFormSubmission}>
     {/* <Form FormSubmissionHandler={props.handleEditTicketFormSubmission}> */}
      <Form.Group>
        <Form.Label style={formStyles}>Document name:</Form.Label>
        <Form.Control style={formStyles} type='text' name='name' defaultValue={term.name} required/>
      </Form.Group>
      <Form.Group>
        <Form.Label style={formStyles} >Who are you contracting with? Enter Contractor name:</Form.Label>
        <Form.Control style={formStyles} type='text' name='contractor' defaultValue={term.contractor} required/>
      </Form.Group>
      <Form.Group>
        <Form.Label style={formStyles} >What is the total amount to be paid to the Contractor? Enter fee amount:</Form.Label>
        <Form.Control style={formStyles} type='text' name='fee' defaultValue={term.fee} required/>
      </Form.Group>
      <Form.Group>
        <Form.Label style={formStyles} >Enter the contract start date:</Form.Label>
        <Form.Control style={formStyles} type='text' name='startDate' defaultValue={term.startDate} required/>
      </Form.Group>
      <Form.Group>
        <Form.Label style={formStyles} >Enter the contract end date:</Form.Label>
        <Form.Control style={formStyles} type='text' name='endDate' defaultValue={term.endDate} required/>
      </Form.Group>
      <Form.Group>
        <Form.Label style={formStyles}>Scope of Work:</Form.Label>
        <Form.Control style={formStyles} type='text' name='sow' defaultValue={term.sow} required/>
      </Form.Group>
      <Form.Group>
        <Form.Label style={formStyles}>Add Indemnification clause:</Form.Label>
        <textarea style={formStyles} type='text' name='indemnity' defaultValue={term.indemnity} required/>
      </Form.Group>
      <Form.Group>
        <Form.Label style={formStyles}>Template Payment Term clause:</Form.Label>
        <textarea style={formStyles} type='text' name='paymentTerm' defaultValue={term.paymentTerm}/>
      </Form.Group>
      <Form.Group>
        <Form.Label style={formStyles}>How many days after invoice is received do you issue payment?</Form.Label>
        <Form.Control style={formStyles} type='text' name='paymentDays' defaultValue={term.paymentDays} required/>
      </Form.Group>
      <Form.Group>
        <Form.Label style={formStyles}>Enter minimum GL insurance level per occurrence</Form.Label>
        <textarea style={formStyles} type='text' name='glMin' defaultValue={term.glMin} required/>
      </Form.Group>
      <Form.Group>
        <Form.Label style={formStyles}>Enter annual aggregate GL insurance</Form.Label>
        <textarea style={formStyles} type='text' name='glMax' defaultValue={term.glMax} required/>
      </Form.Group>
      <Form.Group>
        <Form.Label style={formStyles}>Enter minimum PL insurance level per occurrence</Form.Label>
        <textarea style={formStyles} type='text' name='plMin' defaultValue={term.plMin} required/>
      </Form.Group>
      <Form.Group>
        <Form.Label style={formStyles}>Enter annual aggregate PL insurance</Form.Label>
        <textarea style={formStyles} type='text' name='plMax' defaultValue={term.plMax} required/>
      </Form.Group>
      <Form.Group>
        <Form.Label style={formStyles}>Governing law:</Form.Label>
        <Form.Control style={formStyles} type='text' name='govLaw' defaultValue={term.govLaw} required/>
      </Form.Group>
      <Button type='submit'>Update terms</Button>
     </Form>
    </React.Fragment>
  )
}

export default EditTermForm;