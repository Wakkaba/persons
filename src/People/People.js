import React from 'react';

const People = (props) => {   //<- це функція es6 = tipa - var person = function() {}
    // const person = function() {} - то саме просто ес5
    return (

        <div>
            <img className='people-image' src={props.image} width="500px" height="400px" />

            <p>I'm {props.name} {props.age} </p>
            <p>{props.children}</p>
        </div>

    )
};

export default People;
