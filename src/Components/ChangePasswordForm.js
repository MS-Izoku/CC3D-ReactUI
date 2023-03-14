import React, { useState } from "react";

const ChangePasswordForm = props => {
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const [error, setError] = useState()

    const onSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmNewPassword) {
            setError("New Password and Confirmation must match");
        }
        else {

        }
    }

    return <div id="change-password-form">
        <h2>Change Password</h2>
        <form onSubmit={onSubmit}>
            <label>Current Password:</label>
            <input name="current-password" type="password" value={currentPassword} onChange={e => { setCurrentPassword(e.target.value) }} placeholder="Enter Current Password..." />

            <label>New Password:</label>
            <input name="new-password" type="password" value={newPassword} onChange={e => { setNewPassword(e.target.value) }} placeholder="Enter New Password..." />

            <label>Confirm New Password:</label>
            <input name="confirm-new-password" type="password" value={confirmNewPassword} onChange={e => { setConfirmNewPassword(e.target.value) }} placeholder="Confirm New Password..." />
            <input type="submit" value="Log In" />

            {
                // if there is an error, render it, otherwise render a react fragment (the react markup equivilent of NULL)
                error !== null ? <div>{error}</div> : <></>
            }
        </form>
    </div>
}

export default ChangePasswordForm