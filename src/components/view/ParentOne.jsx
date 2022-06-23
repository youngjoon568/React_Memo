import React, { useState } from 'react';
import ChildOne from './ChildOne';

export default function ParentOne() {
    const [parentAge, setParentAge] = useState(0);
    const [childAge, setChildAge] = useState(0);


    const handleParentAge = () => {
        setParentAge(parentAge + 1);
    };

    const handleChildAge = () => {
        setChildAge(childAge + 1);
    };

    console.log("부모 렌더링");

    return (
        <div style={{ border: "2px solid", padding: "10px", marginTop: "10px" }}>
            <h1>부모</h1>
            <p>age: {parentAge}</p>
            <button onClick={handleParentAge} style={{marginBottom: "10px"}}>부모 나이 증가</button>
            <button onClick={handleChildAge} style={{marginBottom: "10px"}}>자녀 나이 증가</button>
            <ChildOne name={"홍길동"} age={childAge} />
        </div>
    );
};