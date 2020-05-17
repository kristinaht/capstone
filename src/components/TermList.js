import React from 'react';
import Term from './Term';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { Container, Card, Button, Modal } from 'react-bootstrap';

function TermList(props) {

  const [modalShow, setModalShow] = React.useState(false);

  const termListStyle = {
    // position: 'relative',
    margin: 'auto',
    top: '5vh',
    // display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '80%',
    backgroundColor: '#D3D3D3'
  }

  
  useFirestoreConnect([
    { collection: 'terms' }
  ]);

  const terms = useSelector(state => state.firestore.ordered.terms);
  

  if(isLoaded(terms)) {
    return(
      // <div >
      <Container>

<>
<Button variant="primary" onClick={() => setModalShow(true)}>
  Launch vertically centered modal
</Button>

{ terms.map((term) => {
            return <Term 
            show={modalShow}
  onHide={() => setModalShow(false)}
              whenTermClicked={ props.onTermSelection }
              name={ term.name }
              body={ term.body }
              id={ term.id }
              key={ term.id } />
          })} 

{/* <Term
  show={modalShow}
  onHide={() => setModalShow(false)}
  
/> */}
</>

        {/* <hr/>
        <Card style={termListStyle}>
          { terms.map((term) => {
            return <Term 
              whenTermClicked={ props.onTermSelection }
              name={ term.name }
              body={ term.body }
              id={ term.id }
              key={ term.id } />
          })} */}
        {/* </Card> */}
      </Container>
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

