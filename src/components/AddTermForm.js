import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function AddTermForm(props) {

  function handleAddTermFormSubmission(event) {
    event.preventDefault();
    props.onNewTermCreation({
      name: event.target.name.value,
      body: event.target.body.value,
      id: v4()
    });
    console.log(event.target.name.value);
  }
  return(
    <React.Fragment>
      <form onSubmit={handleAddTermFormSubmission}>
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