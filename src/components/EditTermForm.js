import React from 'react';

function EditTermForm(props) {
  const { term } = props;

  function handleEditTermFormSubmission(event) {
    event.preventDefault();
    props.onEditTerm({
      name: event.target.name.value,
      body: event.target.body.value,
      id: term.id
    })
  }

  return(
    <React.Fragment>
     <form  onSubmit={handleEditTermFormSubmission}>
     {/* <form formSubmissionHandler={props.handleEditTicketFormSubmission}> */}
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

export default EditTermForm;