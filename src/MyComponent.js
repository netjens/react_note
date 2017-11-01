import React, { Component } from 'react';
const  MyComponent = (props) => {

        return <div>
            <h1>{props.text}</h1>
            <p>{props.children}</p>

        </div>

    
}

export default MyComponent;