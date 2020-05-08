import React from 'react';
import PropTypes from 'prop-types';


function Term(props){
  return(
    <React.Fragment>
      <div>
        <h2>Term Name: {props.name}</h2>
        <h2>{props.body}</h2>
      </div>
    </React.Fragment>
  )
}

export default Term;

Term.propTypes = {

}