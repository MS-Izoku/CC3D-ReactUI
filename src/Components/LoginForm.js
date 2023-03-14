import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth' // this method is actually from the firebase npm package, not the local firebase.js config
import { auth } from '../firebase' // this is the auth method from the firebase.js file we made locally, not the firebase npm package

const LoginForm = props => {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState()

    const onSubmit = (e) => {
        e.preventDefault(); // prevents the page from auto-refreshing when logging in

        signInWithEmailAndPassword(auth, email, password)
            .then(resp => {
                // this is a place to temporatily log the response from the Firebase Server
                console.log("User Credentials from Server (FOR DEVELOPMENT/DEMONSTRATION PURPOSES ONLY)", resp)
                return resp.json() // turn our server response into parsablle JSON
            })
    }

    return <div>
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
            <label>Email:</label>
            <input type="email" name="email" onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="Enter Email Address..." />

            <label>Password:</label>
            <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder="Enter Password..." />

            <input type="submit" value="Log In" />

            {
                // if there is an error, render it, otherwise render a react fragment (the react markup equivilent of NULL)
                error !== null ? <div>{error}</div> : <></>
            }

        </form>
    </div>
}


export default LoginForm