import React from 'react';
import PropTypes from 'prop-types';

function TermDetail(props) {
  const { term, onClickingDelete, onClickingEdit } = props;

  return(
    <React.Fragment>
      <h1>Document Detail</h1>
      <h2>{ term.name } </h2>
      <h3>{ term.parties }</h3>
      <p>{ term.whereas }</p>
      <p>{ term.sow }</p>
      <p>{ term.govLaw }</p>
      
      <button onClick={ () => onClickingDelete(term.id) }>Delete </button>
      <button onClick={ onClickingEdit }>Edit </button>
    </React.Fragment>
  )
}

TermDetail.propTypes = {
  term: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default TermDetail;