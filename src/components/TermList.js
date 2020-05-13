import React from 'react';
import Term from './Term';
import PropTypes from 'prop-types';

function TermList(props) {
  return (
    <React.Fragment>
      <hr/>
      { Object.values(props.termList).map((term) => {
        return <Term
        whenTermClicked={ props.onTermSelection }
        name={term.name}
        body={term.body}
        id={term.id}
        key={term.id} />

      })}
    </React.Fragment>
  );
}

export default TermList;