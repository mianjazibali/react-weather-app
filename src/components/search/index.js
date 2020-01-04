import React from 'react';
import SearchInput from './input/SearchInput';

let search = (props) => {
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-xs-12 col-sm-12 col-md-6">
                    <SearchInput changeLocation={props.changeLocation} location={props.location} searchHandler={props.searchHandler}/>
                </div>
            </div>
        </div>
    );
}

export default search;