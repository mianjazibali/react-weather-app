import React from 'react';
import './SearchInput.css';

let searchInput = (props) => {
    return (  
        <div className="container">
            <div className="container__item">
                <form className="">
                    <input type="text"
                        className="form__field"
                        placeholder="City"
                        onChange={event => props.changeLocation(event)}
                        value={props.location}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                props.searchHandler()
                                event.preventDefault();
                            }
                        }} 
                    />
                    <button type="button" className="btn btn--primary btn--inside uppercase" onClick={props.searchHandler}>Search</button>
                </form>
            </div>
        </div>
    );
}

export default searchInput;