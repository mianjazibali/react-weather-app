import React from 'react';
import './SearchButton.css';

let searchButton = (props) => {
    return (
        <button>Search {props.location}</button>
    );
}

export default searchButton;