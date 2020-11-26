import React, { useState } from "react";


const App = () => {
    const [count, setCount] = useState(0);
    const IncNum = () => {
        setCount(count + 1);
    }

    return (
        <>

            <h1>{count}</h1>
            <button onClick={IncNum}>Click here</button>

        </>
    );
};
export default App;
