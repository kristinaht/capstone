import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

function AddTermForm(props) {

  const firestore = useFirestore();
  
  function addTermToFirestore(event) {

   

    event.preventDefault();
    props.onNewTermCreation();
   
    return firestore.collection('terms').add(
      {
        name: event.target.name.value,
        body: event.target.body.value
      }
    )
  }
  return(
    <React.Fragment>
      <form onSubmit={addTermToFirestore}>
        <input
        type='text'
        name='name'
        placeholder='Term name' />
        <input
        type='text'
        name='body'
        placeholder='Term body' />
        <button type='submit'>Add new term</button>
      </form>
    </React.Fragment>
  )
}

export default AddTermForm;