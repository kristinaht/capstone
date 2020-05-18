import React from 'react';
import Term from './Term';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { Container, Card, Button } from 'react-bootstrap';
// import MyDocument from './MyDocument';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

function TermList(props) {

 

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

  // const styles = StyleSheet.create({
  //   page: {
  //     flexDirection: 'row',
  //     backgroundColor: '#E4E4E4'
  //   },
  //   section: {
  //     margin: 10,
  //     padding: 10,
  //     flexGrow: 1
  //   }
  // });
  


  // const myDocument = (termsList) => (
  //   <Document>
  //     <Page size="A4" style={styles.page}>
  //       <View style={styles.section}>
  //         <Text>{termList}</Text>
  //       </View>
  //       <View style={styles.section}>
  //         <Text>Section #2</Text>
  //       </View>
  //     </Page>
  //   </Document>
  // );
  

  if(isLoaded(terms)) {
    return(
      // <div >
      <Container>
        {/* <hr/> */}
        <Card style={termListStyle}>
          { terms.map((term) => {
            return <Term 
              whenTermClicked={ props.onTermSelection }
              name={ term.name }
              body={ term.body }
              id={ term.id }
              key={ term.id } />
          })}
          {/* <Button onClick={myDocument}>Export</Button> */}
        </Card>
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

