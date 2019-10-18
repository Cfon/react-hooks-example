import React from 'react';
import './Menu.scss';

const Menu = ({ className, onClick }) => {
    console.log('Menu rendering');
    return (
        <div className={className} onClick={onClick}>
            <h2>
                <a href="#">Main</a>
            </h2>
            <h2>
                <a href="#">About</a>
            </h2>
            <h2>
                <a href="#">Contact</a>
            </h2>
            <h2>
                <a href="#">Search</a>
            </h2>
        </div>
    );
};

export default Menu;
