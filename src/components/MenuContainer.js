import React, { useState, useMemo } from 'react';
import MemoizedButton from './MemoizedButton';
import Menu from './Menu';
import Content from './Content';

const MenuContainer = () => {
    console.log('> Container rendering');
    // state
    const [visible, setVisible] = useState(false);
    const className = 'menu ' + (visible ? 'show' : 'hide');

    const toggleMenu = event => {
        event.stopPropagation();
        setVisible(value => !value);
    };

    // disable content repeat rendering
    const memoizedContent = useMemo(() => <Content />, []);

    return (
        <div>
            <MemoizedButton onClick={toggleMenu} />
            <Menu className={className} onClick={toggleMenu} />
            {memoizedContent}
        </div>
    );
};

export default MenuContainer;
