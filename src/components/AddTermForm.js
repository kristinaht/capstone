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
        parties: event.target.parties.value,
        whereas: event.target.whereas.value,
        sow: event.target.sow.value,
        govLaw: event.target.govLaw.value
      }
    )
  }
  return(
    <React.Fragment>
      <form onSubmit={addTermToFirestore}>
      <input
        type='text'
        name='name'
        placeholder='Document name' />
        <input
        type='text'
        name='parties'
        placeholder='This contract is between...' />
        <input
        type='text'
        name='whereas'
        placeholder='WHEREAS' />
        <input
        type='text'
        name='sow'
        placeholder='Scope of Work' />
        <input
        type='text'
        name='govLaw'
        placeholder='Governing Law..' />
        <button type='submit'>Add new terms</button>
      </form>
    </React.Fragment>
  )
}

export default AddTermForm;