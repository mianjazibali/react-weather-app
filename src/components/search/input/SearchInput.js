import React from 'react';
import './SearchInput.css';

let searchInput = (props) => {
    return (  
        <div className="container">
            <div className="container__item">
                <form className="form">
                    <input type="email" className="form__field" placeholder="City" onChange={event => props.changeLocation(event)} value={props.location} />
                    <button type="button" className="btn btn--primary btn--inside uppercase" onClick={props.searchHandler}>Search</button>
                </form>
            </div>
        </div>
    );
}

export default searchInput;