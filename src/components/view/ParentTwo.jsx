import React, { useCallback, useState } from 'react';
import ChildTwo from './ChildTwo';

export default function ParentTwo() {
    const [parentAge, setParentAge] = useState(0);

    const handleParentAge = () => {
        setParentAge(parentAge + 1);
    };

    // const name = useMemo(() => {
    //     return {
    //         lastName: "홍",
    //         firstName: "길동"
    //     };
    // }, []);

    const tellMe = useCallback(() => {
        console.log("홍길동");
    }, []);


    console.log("부모 렌더링");

    return (
        <div style={{ border: "2px solid", padding: "10px", marginTop: "10px" }}>
            <h1>부모</h1>
            <p>age: {parentAge}</p>
            <button onClick={handleParentAge} style={{marginBottom: "10px"}}>부모 나이 증가</button>
            <ChildTwo name={"홍길동"} tellMe={tellMe} />
        </div>
    );
};