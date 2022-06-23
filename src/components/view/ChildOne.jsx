import React, { memo } from 'react';

function Child({ name, age }) {
    console.log("자식 렌더링");

    return (
        <div style={{ border: "2px solid red", padding: "10px" }}>
            <h3>자식</h3>
            <p>name: {name}</p>
            <p>age: {age}</p>
        </div>
    );
};

export default memo(Child);