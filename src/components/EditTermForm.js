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
      body: event.target.body.value
    }
    return firestore.update({ collection: 'terms', doc: term.id}, propertiesToUpdate);
  }

  return(
    <React.Fragment>
     <form  onSubmit={handleEditTermFormSubmission}>
     {/* <form formSubmissionHandler={props.handleEditTicketFormSubmission}> */}
     <select value={props.name}>
       <option name='name'>Governing law</option>
       <option name='name1'>insurance</option>
       {/* <option></option>
       <option></option> */}
     </select>
     <select value={props.body}>
       <option name='body'>bla bla gov body</option>
       <option name="body1">bla insurance</option>
       {/* <option></option>
       <option></option> */}
     </select>
     {/* <input
        type='text'
        name='name'
        placeholder='Term name' />
        <input
        type='text'
        name='body'
        placeholder='Term body' /> */}
        <button type='submit'>Add new term</button>
     </form>
    </React.Fragment>
  )
}

export default EditTermForm;