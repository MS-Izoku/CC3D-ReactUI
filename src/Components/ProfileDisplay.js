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

    return <div id="profile">
        {
            user === null ? <p>Please Sign In</p> :
                <>
                    <p>{user.displayName}</p>
                    <LogoutButton />

                </>
        }
    </div>
}

export default ProfileDisplay