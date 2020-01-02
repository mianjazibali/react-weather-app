import React from 'react';
import SearchInput from './input/SearchInput';
import SearchButton from './button/SearchButton';

let search = (props) => {
    return (
        <div>
            <SearchInput changeLocation={props.changeLocation} location={props.location} />
            <SearchButton location={props.location} />
        </div>
    );
}

export default search;