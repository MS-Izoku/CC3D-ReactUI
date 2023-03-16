import React, { useState , useEffect } from "react";
import { getAuth , onAuthStateChanged, updatePassword } from "firebase/auth";
import { auth } from "../firebase";

const ChangePasswordForm = props => {
    const [user, setUser] = useState()
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const [error, setError] = useState()

    const onSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmNewPassword) {
            setError("New Password and Confirmation must match");
        }
        else {
            updatePassword(props.user, newPassword)
        }
    }


    useEffect(() => {
        // listen for any change to signin/up status, then run this method
        const listenForAuthChange = onAuthStateChanged(auth, authUser => {
            if (authUser) {
                setUser(authUser)
            }
            else setUser(null)
        })

        return () => { listenForAuthChange() }
    }, [])

    return <div id="change-password-form">
        <h2>Change Password</h2>
        <form onSubmit={onSubmit}>
            <label>New Password:</label>
            <input name="new-password" type="password" value={newPassword} onChange={e => { setNewPassword(e.target.value) }} placeholder="Enter New Password..." />

            <label>Confirm New Password:</label>
            <input name="confirm-new-password" type="password" value={confirmNewPassword} onChange={e => { setConfirmNewPassword(e.target.value) }} placeholder="Confirm New Password..." />
            <input type="submit" value="Change Password" />

            {
                // if there is an error, render it, otherwise render a react fragment (the react markup equivilent of NULL)
                error !== null ? <div>{error}</div> : <></>
            }
        </form>
    </div>
}

export default ChangePasswordForm