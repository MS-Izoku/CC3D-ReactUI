import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from "../firebase"

const ProfileDisplay = props => {
    const [user, setUser] = useState(null)

    const LogoutButton = () => <button onClick={() => {
        signOut(auth)
    }}>Logout</button>

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

    return user === null ? <div>Please Sign In</div>
        :
        <div>
            {user.displayName}
            <LogoutButton />
        </div>
}

export default ProfileDisplay