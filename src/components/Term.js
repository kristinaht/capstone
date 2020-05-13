import React from 'react';
import PropTypes from 'prop-types';


function Term(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenTermClicked(props.id)}>
        <h2>Term Name: {props.name}</h2>
        <h2>{props.body}</h2>
      </div>
      <hr/>
    </React.Fragment>
  )
}


Term.propTypes = {

}
export default Term;

