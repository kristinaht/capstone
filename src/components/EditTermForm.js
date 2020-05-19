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
      parties: event.target.parties.value,
      whereas: event.target.whereas.value,
      sow: event.target.sow.value,
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