import React from 'react';
import TermList from './TermList';
import AddTermForm from './AddTermForm';
import EditTermForm from './EditTermForm'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';
import termListReducer from '../reducers/term-list-reducer';

class TermsControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTerm: null,
      // editing: false
    };
  }

  handleClick = () => {
    if(this.state.selectedTerm != null){
      this.setState({
        selectedTerm: null,
        // editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm;
      dispatch(action);
    }
  }

  handleAddingNewTermToList = (newTerm) => {
    const { dispatch } = newTerm;
    const action = a.addTerm(newTerm);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleTermSelection = (id) => {
    const selectedTerm = this.props.masterTermList[id];
    this.setState({ selectedTerm: selectedTerm });
  }

  // handleEditClick = () => {
  //   this.setState({ editing: true });
  // }

  // handleEditingTerm = (termToEdit) => {
   
  // }

  handleDeletingTerm = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteTerm(id);
    dispatch(action);
    // const action2 = a.toggleForm();
    // dispatch(action2);
    this.setState({ selectedTerm: null });
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

  if(this.state.selectedTerm != null) {
    currentlyVisibleState = 
    <TermDetail
      term = { this.state.selectedTerm }
      onClickingDelete = { this.state.handleDeletingTerm } />
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
      <React.Fragment>
     
        { currentlyVisibleState }
        <button onClick={ this.handleClick }>{ buttonText }</button>
      </React.Fragment>
    );
  }
}

TermsControl.propTypes = {
  masterTermList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterTermList: state.termListReducer,
    formVisible: state.formReducer
  }
}

TermsControl = connect(mapStateToProps)(TermsControl);

export default TermsControl;