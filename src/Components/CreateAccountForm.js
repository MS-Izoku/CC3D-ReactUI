import React, { useState } from 'react'
import { auth } from '../firebase' // this is the auth method from the firebase.js file we made locally, not the firebase npm package
import { createUserWithEmailAndPassword } from 'firebase/auth' // this method is actually from the firebase npm package, not the local firebase.js config

const CreateAccountForm = props => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState()

    const onSubmit = (e) => {
        e.preventDefault(); // prevents the page from auto-refreshing when logging in

        if (password !== passwordConfirmation)
            setError("Password and Confirmation do not match")
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then(resp => {
                    // this is a place to temporatily log the response from the Firebase Server
                    console.log("User Credentials from Server (FOR DEVELOPMENT/DEMONSTRATION PURPOSES ONLY)", resp)
                    return resp.json()
                })
                .then(json => {

                })
        }
    }

    return <div>
        <h2>Create New Account</h2>
        <form onSubmit={onSubmit}>
            <label>Username:</label>
            <input type="text" name="username" onChange={setUsername} value={username} placeholder="Enter Username..." />

            <label>Email:</label>
            <input type="email" name="email" onChange={setEmail} value={email} placeholder="Enter Email..." />

            <label>Password:</label>
            <input type="password" name="password" onChange={setPassword} value={password} placeholder="Enter Password..." />

            <label>Confirm Password:</label>
            <input type="password-confirmation" name="password-confirmation" onChange={setPasswordConfirmation} value={passwordConfirmation} placeholder="Confirm Password..." />

            <input type="submit" value="Log In" />

            {
                // if there is an error, render it, otherwise render a react fragment (the react markup equivilent of NULL)
                error !== null ? <div>{error}</div> : <></>
            }
        </form>
    </div>
}


export default CreateAccountForm