import React from 'react';
import PropTypes from 'prop-types';

function TermDetail(props) {
  const { term, onClickingDelete, onClickingEdit } = props;

  return(
    <React.Fragment>
      <h1>Document Detail</h1>
      <h2>{ term.name } </h2>
      <h3>{ term.parties }</h3>
      <h4>1. Services</h4>
      <p>Contractor shall perform the services set out in the Statement of Work above (the “Services”) in accordance with the
      terms and conditions of this Contract and in a professional and workmanlike manner, in accordance with generally recognized industry
      standards for similar services;</p>
      <p>1.2 This Contract does not create an employer/employee relationship between the parties. It is the parties’ intention that
      Contractor will be an independent contractor and not an employee of OHSU for any purpose. Contractor shall be responsible for
      compliance with all federal, state and local laws, ordinances, regulations and orders that are applicable to this Contract and
      Contractor’s performance hereunder ( « Applicable Laws ») related to its employees and agents. Contractor will retain sole and
      absolute discretion over the manner and means of carrying out Contractor’s activities and responsibilities hereunder. </p>
      <p>{ term.whereas }</p>
      <h4>2. Scope of Work</h4>
      <p>{ term.sow }</p>
      <h4>3. Responsibility for Damages; Indemnity</h4>
      <p>11.1 Contractor shall be responsible for all damage to property, injury to persons, and loss, expense, inconvenience, and
      delay which may be caused by, or result from, the conduct of work under this Contract, or from any act, omission, or neglect of the
      Contractor, its subcontractors, or employees.</p>
      <h4>4. Governing Law/Venue</h4>
      <p>{ term.govLaw }</p>
      
      <button onClick={ () => onClickingDelete(term.id) }>Delete </button>
      <button onClick={ onClickingEdit }>Edit </button>
    </React.Fragment>
  )
}

TermDetail.propTypes = {
  term: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default TermDetail;