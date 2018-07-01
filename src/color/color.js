import React from 'react';

export default function Color(props) {
    return <button onClick={() => props.oncluck()} style={{ color: props.color }}> hey {props.text}</button>

}

