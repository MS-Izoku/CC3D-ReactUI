import React from 'react'

const ProfileDisplay = props => {
    //const [username, email, id] = props.user; // fancy JS object destructuring, to seperate out variables from the user property
    const LogoutButton = () => <button onClick={() => { }}>Logout</button>


    return props.user ? <div>Please Sign In</div>
        :
        <div>
            User Display!
            <LogoutButton />
        </div>
}

export default ProfileDisplay