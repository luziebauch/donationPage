/* eslint-disable react/prop-types */
import React from 'react';

// Use PureComponent instead of Component because it handles the shouldComponentUpdate method for u.
// If u want to define ur own shouldComponentUpdate logic use Component instead of PureComponent.
const Headline = ({ headline }) => (
    <div className="headline">
        <h1>{headline}</h1>
    </div>
);
export default Headline;
