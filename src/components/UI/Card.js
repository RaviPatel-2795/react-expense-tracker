import "./Card.css";

import React from 'react'; // React Import not needed but JSX uses this under the hood

const Card = (props) => {
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>
};

export default Card;