import React from 'react';
import './EmptyCard.css';

let emptyCard = (props) => {
    let body = <p>Enter A City Name In The Search Box And Let The Show Begin!</p>;
    if(props.msg !== '') {
        body = <p>{props.msg}</p>
    }
    if(props.isFetching) {
        body = <p><i className="fa fa-spinner fa-spin loader" /></p>
    }
    return (
        <div className="container-fluid shadow bg-white mt-5 pt-5 pb-4">
            <div className="row">
                <div className="col-md-12 msg date">
                    {body}
                </div>
            </div>
        </div>
    );
}

export default emptyCard;