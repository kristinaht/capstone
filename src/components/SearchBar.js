import React from 'react';
import { Form, Button, Navbar, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

function SearchForm(props) {

  function handleSearch(event) {
    event.preventDefault();
    props.onSearchSubmission({
      name: event.target.name.value,
   
    });
  }

  const formStyles = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    color: '#f5f5f5'
  }

  const mainStyles = {
    fontSize: '2rem',
  }

  return(
    <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark" style={formStyles}>
      <Navbar.Brand style={mainStyles}>Find Contracts</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Form inline className="ml-auto" onSubmit={handleSearch}>
          <Form.Control type="text" name="name" placeholder="Contract Name"/><br/>
          <Button variant="outline-light" type="submit">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

SearchBar.propTypes = {
  onSearchSubmission: PropTypes.func
}

export default SearchBar;