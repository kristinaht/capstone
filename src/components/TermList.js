import React from 'react';
import Term from './Term';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { Container, Card, Button } from 'react-bootstrap';


function TermList(props) {

 

  const termListStyle = {
        margin: 'auto',
        top: '4vh',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',   
  }

  
  useFirestoreConnect([
    { collection: 'terms' }
  ]);

  const terms = useSelector(state => state.firestore.ordered.terms);

  if(isLoaded(terms)) {
    return(
      // <div >
      <React.Fragment>
       
        <Card style={termListStyle}>
          { terms.map((term) => {
            return <Term 
              whenTermClicked={ props.onTermSelection }
              name={ term.name }
              contractor={ term.contractor }
              fee={ term.fee }
              startDate={ term.startDate } 
              endDate={ term.endDate } 
              sow={ term.sow } 
              indemnity={ term.indemnity } 
              paymentTerm={ term.paymentTerm } 
              paymentDays={ term.paymentDays } 
              glMin={ term.glMin } 
              glMax={ term.glMax } 
              plMin={ term.plMin } 
              plMax={ term.plMax } 
              govLaw={ term.govLaw }
              id={ term.id }
              key={ term.id } />
          })}
          {/* <Button onClick={myDocument}>Export</Button> */}
        </Card>
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

