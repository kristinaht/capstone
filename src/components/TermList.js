import React from 'react';
import Term from './Term';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function TermList(props) {
  
  useFirestoreConnect([
    { collection: 'terms' }
  ]);

  const terms = useSelector(state => state.firestore.ordered.terms);

  if(isLoaded(terms)) {
    return(
      <React.Fragment>
        <hr/>
        { terms.map((term) => {
          return <Term 
            whenTermClicked={ props.onTermSelection }
            name={ term.name }
            body={ term.body }
            id={ term.id }
            key={ term.id } />
        })}
      </React.Fragment>
    )
  } else {
    return(
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }

}

export default TermList;

TermList.propTypes = {
  onTermSelection: PropTypes.func
}