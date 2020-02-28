import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { useHistory } from "react-router-dom";

export default function Login() {
    const [ login, setLogin ] = useState({
        username: "",
        password: ""
    })

    const history = useHistory();

    const handleChange = e => {
        e.preventDefault();
        setLogin({
            ...login, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("login", login)
            .then(res => {
                console.log(res)
                window.localStorage.setItem('token', res.data.payload)
                history.push("/creatures")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Welcome to the Safari App!</h1>
            <h2>I can't show you more until you log in. Please build out a login.</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                    type="text"
                    name="username"
                    label="username"
                    value={login.username}
                    onChange={handleChange}
                    className="input"
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="text"
                    name="password"
                    label="password"
                    value={login.password}
                    onChange={handleChange}
                    className="input"
                />
                <button>Submit</button>
            </form>
        </div>
    )
}