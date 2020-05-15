import React from 'react';
import Term from './Term';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { Card, Button } from 'react-bootstrap';

function TermList(props) {

  const termListStyle = {
    position: 'relative',
    top: '5vh',
    // display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    backgroundColor: '#333333'
  }

  
  useFirestoreConnect([
    { collection: 'terms' }
  ]);

  const terms = useSelector(state => state.firestore.ordered.terms);

  if(isLoaded(terms)) {
    return(
      <div style={termListStyle}>
        <hr/>
        { terms.map((term) => {
          return <Term 
            whenTermClicked={ props.onTermSelection }
            name={ term.name }
            body={ term.body }
            id={ term.id }
            key={ term.id } />
        })}
      </div>
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