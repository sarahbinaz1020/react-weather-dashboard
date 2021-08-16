import React from 'react';
import "./searchbar.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function SearchBar() {
    return (
      <InputGroup >
      
      <FormControl
        type="search"
        placeholder="Search by City..."
        className="ml-3 mr-4 searchbar"
        aria-label="Search"
        // onChange={handleInputChange}
      />
      <Button variant="danger">Search</Button>
   
      </InputGroup>
    )
}

export default SearchBar
