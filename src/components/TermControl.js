import React from 'react';
import TermList from './TermList';
import AddTermForm from './AddTermForm';
import EditTermForm from './EditTermForm'; 
import TermDetail from './TermDetail';
import MyDocument from './MyDocument';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';
// import { Container, Button } from 'react-bootstrap';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';


const termControlStyles = {
  position: 'relative',
  top: '20vh',
  width: '80vw',
  height: 'auto',
  marginTop: '2vh',
  marginLeft: '10vw',
  marginRight: '10vw',
  marginBottom: '10%'
}

class TermsControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTerm: null,
      editing: false
    };
  }

  handleClick = () => {
    if(this.state.selectedTerm != null){
      this.setState({
        selectedTerm: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleEditClick = () => {
    console.log('handleEditClick reached!');
    this.setState({ editing: true });
  }

  handleAddingNewTermToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleTermSelection = (id) => {
    this.props.firestore.get({ collection: 'terms', doc: id})
      .then((term) => {
        const firestoreTerm={
          name: term.get('name'),
          contractor: term.get('contractor'),
          fee: term.get('fee'),
          startDate: term.get('startDate'),
          endDate: term.get('endDate'),
          sow: term.get('sow'),
          indemnity: term.get('indemnity'),
          paymentTerm: term.get('paymentTerm'),
          paymentDays: term.get('paymentDays'),
          glMin: term.get('glMin'),
          glMax: term.get('glMax'),
          plMin: term.get('plMin'),
          plMax: term.get('plMax'),
          govLaw: term.get('govLaw'),
          id: term.id
        }
      this.setState({ selectedTerm: firestoreTerm });
      })
  }

  handleEditingTerm = () => {
    this.setState({
      editing: false,
      selectedTerm: null
    })
  }

  handleDeletingTerm = (id) => {
    this.props.firestore.delete({ collection: 'terms', doc: id});
    this.setState({ selectedTerm: null });
  }

  handleExporting = ()  =>{
    return (
      <div>
      <PDFDownloadLink document={<TermDetail />} fileName="somename.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
    );
  }


  render(){
    // const auth = this.props.firebase.auth();
    // if(!isLoaded(auth)) {
    //   return (
    //     <React.ragment>
    //       <h1>Loading...</h1>
    //     </React.ragment>
    //   )
    // }
    // if ((isLoaded(auth)) && (auth.currentUser == null)) {
    //   return (
    //     <React.Fragment>
    //       {/* <h1>Sign up to access the Creator</h1> */}
    //     </React.Fragment>
    //   )
    // }
    // if ((isLoaded(auth)) && (auth.currentUser !== null)) {
    let currentlyVisibleState = null;
    let buttonText = null;

  if(this.state.editing) {
    currentlyVisibleState = <EditTermForm term={ this.state.selectedTerm } onEditTerm={ this.handleEditingTerm } />
    buttonText='Return to Terms List';
  } 

  
  else if(this.state.selectedTerm != null) {
    currentlyVisibleState = 
    <TermDetail
      term = { this.state.selectedTerm }
      onClickingDelete = { this.handleDeletingTerm }
      onClickingEdit = { this.handleEditClick }
      onClickingExport = { this.handleExporting } />
    buttonText='Return to Terms List';
  } else if (this.props.formVisible) {
    currentlyVisibleState =
    <AddTermForm
      onNewTermCreation={ this.handleAddingNewTermToList } />
    buttonText='Return to Terms List';
  } else {
    currentlyVisibleState =
    <TermList
      termList={ this.props.masterTermList }
      onTermSelection={ this.handleTermSelection } />
    buttonText='Add Term';
  }
  return(
    <div style={termControlStyles}>
   
      { currentlyVisibleState }
      <button onClick={ this.handleClick }>{ buttonText }</button>
    </div>
  );
    }
  }
// }

TermsControl.propTypes = {
  masterTermList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    formVisible: state.formVisible
  }
}

TermsControl = connect(mapStateToProps)(TermsControl);

export default withFirestore(TermsControl);