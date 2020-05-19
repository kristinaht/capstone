import React from 'react';
import PropTypes from 'prop-types';

function TermDetail(props) {
  const { term, onClickingDelete, onClickingEdit } = props;

  return(
    <React.Fragment>
      <h1>Document Detail</h1>
      <h2>{ term.name } </h2>
      <p>This Professional Services Contract ("Contract") is between MyCompany, Inc, an Oregon corporation located at 3434 NW Some Address, Portland, OR 97209("Company") and <em>{term.parties}</em>("Contractor"). The parties agree as follows:</p>
      <h4>Section A: Fees and Term</h4>
      <p>Company shall pay Contractor a sum not to exceed ${term.fee}, which includes all travel. administrative and other expenxes. Company shall pay Contractor in accordance with Section G.2, below.</p><br/>
      <p>The Contract takes effect on {term.startDate}, and unless terminated earlier as provided below, continues through {term.endDate} ("Term").</p>
      <h4>Section B: Scope of Work</h4>
      <p>{ term.sow }</p>
      <h4>Section C: Terms and Conditions</h4>
      <h5>1. Services</h5>
      <p>1.1 Contractor shall perform the services set out in the Statement of Work above (the “Services”) in accordance with the
      terms and conditions of this Contract and in a professional and workmanlike manner, in accordance with generally recognized industry
      standards for similar services;</p>
      <p>1.2 This Contract does not create an employer/employee relationship between the parties. It is the parties’ intention that
      Contractor will be an independent contractor and not an employee of Company for any purpose. Contractor shall be responsible for
      compliance with all federal, state and local laws, ordinances, regulations and orders that are applicable to this Contract and
      Contractor’s performance hereunder ( « Applicable Laws ») related to its employees and agents. Contractor will retain sole and
      absolute discretion over the manner and means of carrying out Contractor’s activities and responsibilities hereunder. </p>
    
      <h5>3. Responsibility for Damages; Indemnity</h5>
      <p>3.1 Contractor shall be responsible for all damage to property, injury to persons, and loss, expense, inconvenience, and
      delay which may be caused by, or result from, the conduct of work under this Contract, or from any act, omission, or neglect of the
      Contractor, its subcontractors, or employees.</p>
      <h5>4. Payment</h5>
      <p>Unless otherwise expressly provided for in this Contract, payment shall be made after completion of Services. Contractor
      shall submit invoices to the Department. Company payment terms are net {term.paymentTermDay} from the date of invoice. Contractor may not charge
      Company interest on an overdue payment.</p>
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