import React, { useState } from "react"

function Count() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div>
                <h1>counter</h1>
                <h1>count:{<span data-testid="countervalue">{count}</span>}</h1>
                <button data-testid="increment" onClick={() => setCount(count + 1)}>increase</button>
                <button data-testid="decrement" onClick={() => setCount(count - 1)}>substract</button>
                <button  data-testid="rest" onClick={() => setCount(0)}>reset</button>
            </div>
        </>
    )
}

export default Count