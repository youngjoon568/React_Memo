import React, { memo } from 'react';

function ChildTwo({ name, tellMe }) {
    console.log("자식 렌더링");

    return (
        <div style={{ border: "2px solid red", padding: "10px" }}>
            <h3>자식</h3>
            <p>이름: { name }</p>
            <button onClick={tellMe}>내 이름을 불려줘</button>
            {/* <p>성: { name.lastName }</p>
            <p>이름: { name.firstName }</p> */}
        </div>
    );
};

export default memo(ChildTwo);