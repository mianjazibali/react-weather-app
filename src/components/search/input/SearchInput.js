import React from 'react';
import './SearchInput.css';

let searchInput = (props) => {
    return (  
        <div class="container">
            <div class="container__item">
                <form class="form">
                    <input type="email" class="form__field" placeholder="City" onChange={event => props.changeLocation(event)} value={props.location} />
                    <button type="button" class="btn btn--primary btn--inside uppercase">Search</button>
                </form>
            </div>
        </div>
    );
}

export default searchInput;