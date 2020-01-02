import React from 'react';
import SearchInput from './input/SearchInput';

let search = (props) => {
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <SearchInput changeLocation={props.changeLocation} location={props.location} />
                </div>
            </div>
        </div>
    );
}

export default search;