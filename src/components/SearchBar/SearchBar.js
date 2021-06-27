import React from 'react';
import "./searchbar.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function SearchBar() {
    return (
      <InputGroup>
      
      <FormControl
        type="search"
        placeholder="Search by City..."
        className="mr-2"
        aria-label="Search"
        // onChange={handleInputChange}
      />
      <Button variant="outline-light">Search</Button>
   
      </InputGroup>
    )
}

export default SearchBar
