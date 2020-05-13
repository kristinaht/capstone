import React from 'react';
import TermList from './TermList';
import AddTermForm from './AddTermForm';
import EditTermForm from './EditTermForm'; 
import TermDetail from './TermDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';


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

  handleAddingNewTermToList = (newTerm) => {
    const { dispatch } = this.props;
    const action = a.addTerm(newTerm);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleTermSelection = (id) => {
    const selectedTerm = this.props.masterTermList[id];
    this.setState({ selectedTerm: selectedTerm });
  }

  handleEditingTerm = (termToEdit) => {
    const editedmasterTermList = this.state.masterTermList
      .filter(term => term.id !== this.state.selectedTerm.id) //filter to replace the term with the new version below
      .concat(termToEdit);
    this.setState({
      masterTermList: editedmasterTermList,
      editing: false,
      selectedTerm: null
    })
  }

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

  if(this.state.editing) {
    currentlyVisibleState = <EditTermForm term={ this.state.selectedTerm } onEditTerm={ this.handleEditingTerm } />
    buttonText='Return to Terms List';
  } else if(this.state.selectedTerm != null) {
    currentlyVisibleState = 
    <TermDetail
      term = { this.state.selectedTerm }
      onClickingDelete = { this.handleDeletingTerm }
      onClickingEdit = { this.handleEditClick } />
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
    masterTermList: state.masterTermList,
    formVisible: state.formVisible
  }
}

TermsControl = connect(mapStateToProps)(TermsControl);

export default TermsControl;