import React, { useState } from 'react';

const Counter = (props) => {
    const { name } = props;
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <button onClick={increment}>{name} - Click {count}</button>
    );

};

export default Counter;