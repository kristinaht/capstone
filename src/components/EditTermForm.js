import React from 'react';
import { useFirestore } from 'react-redux-firebase';

function EditTermForm(props) {

  const firestore = useFirestore();

  const { term } = props;

  // const termsCollection = db.collection('terms');
  // const query = termsCollection.where('name', '==', )

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
     <form  onSubmit={handleEditTermFormSubmission}>
     {/* <form formSubmissionHandler={props.handleEditTicketFormSubmission}> */}
     <input
        type='text'
        name='name'
        placeholder={props.term.name} />
     <input
        type='text'
        name='parties'
        placeholder={props.term.parties} />
        <input
        type='text'
        name='whereas'
        placeholder={props.term.whereas} />
        <input
        type='text'
        name='sow'
        placeholder={props.term.sow} />
        <input
        type='text'
        name='govLaw'
        placeholder={props.term.govLaw} />
        <button type='submit'>Update terms</button>
     </form>
    </React.Fragment>
  )
}

export default EditTermForm;