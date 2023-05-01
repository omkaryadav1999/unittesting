import React, { useState } from "react";
import axios from "axios";



function Login() {
    const [err, setErr] = useState(false);
    const [email, setEmail] = useState("");
    const [lod, setLod] = useState(false);
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});

    const sendData = async (e) => {
        e.preventDefault();
        setLod(true);

        try {
            const { data } = axios.get("https://jsonplaceholder.typicode.com/users/1");
            setUser(data)
        } catch (error) {
            setErr(error)
        }
    }

    return (
        <>
            <form>
                <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
                <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
                <button disabled={!email || !password} onClick={sendData}>
                    {lod ? "plase wait" : "login"}
                </button><br />
                <span data-testid="error" style={{ color: "red", visibility: err ? " visible" : "hidden " }}>something wet wrong!</span>
            </form>
        </>
    )
}
export default Login




