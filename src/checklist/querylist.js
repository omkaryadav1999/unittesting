import React from "react";

function List() {
    const a = 10;
    const b = 20;
    return (
        <>
            <h1>ul list</h1>
            <ul>
                <li>omkar</li>
                <li>sanjay</li>
                <li>yadav</li>
                <li>karad</li>
            </ul>

            <h1 title="mytile">title</h1>
            <p data-testid="sum">{a + b}</p>

            <label>
                username
                <input type="text" placeholder="username" />
            </label>
        </>
    )
}

export default List