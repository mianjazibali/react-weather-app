import React from 'react';
import './SearchInput.css';

let searchInput = (props) => {
    return (
        <input type="text" onChange={event => props.changeLocation(event)} value={props.location}/>
    );
}

export default searchInput;