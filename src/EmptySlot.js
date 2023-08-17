import React, { useEffect } from 'react';

const EmptySlot = (props) => {
    useEffect(() => {
        let randMilliseconds = Math.ceil(Math.random() * 3000);
        let timer = setTimeout(() => {
            props.toggle(true);
        }, randMilliseconds);

        return () => {
            clearTimeout(timer);
        };
    });

    return (
        <div>
            <img style={{ width: '25vw' }} src="/molehill.png" alt="Molehill" />
        </div>
    );
};

export default EmptySlot;
