import React, { memo } from 'react';
import './MemoizedButton.scss';

const MemoizedButton = ({ onClick }) => {
    console.log('MemoizedButton rendering');
    return <div className="button" onClick={onClick} />;
};

export default memo(
    MemoizedButton,
    () => true // disable button repeat rendering
);
