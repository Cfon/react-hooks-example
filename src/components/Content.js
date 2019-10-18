import React, { Fragment } from 'react';

const Content = () => {
    console.log('Content rendering');
    return (
        <Fragment>
            <p>Can you spot the item that doesn't belong?</p>
            <ul>
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>Sit</li>
                <li>Bumblebees</li>
                <li>Aenean</li>
                <li>Consectetur</li>
            </ul>
        </Fragment>
    );
};

export default Content;
