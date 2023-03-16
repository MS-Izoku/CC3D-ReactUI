import './App.css';
import { useState, useEffect } from 'react';
import { auth } from './firebase'

import ChangePasswordForm from './Components/ChangePasswordForm';
import CreateAccountForm from './Components/CreateAccountForm'
import InstructionDisplay from './Components/InstructionDisplay'
import LoginForm from './Components/LoginForm'
import ProfileDisplay from './Components/ProfileDisplay';
import TriviaRenderer from './Components/TriviaRenderer';
import { onAuthStateChanged } from 'firebase/auth';

import logo from './CC3D-Logo.png'

const App = () => {
  const [user, setUser] = useState(null)
  const [unserializedUserData, setUnserializedUserData] = useState({})

  const setUserConfig = (firebaseCredentials) => {
    const fbUser = firebaseCredentials.user
    const configuredUserObj = {
      email: fbUser.email,
      username: fbUser.displayName,
      credentials: firebaseCredentials
    }

    console.log(configuredUserObj)
    setUnserializedUserData(firebaseCredentials)
    setUser(configuredUserObj)
  }

  useEffect(() => {
    // listen for any change to signin/up status, then run this method
    const listenForAuthChange = onAuthStateChanged(auth, authUser => {
      if (authUser) {
        setUser(authUser)
      }
      else setUser(null)

      return () => { listenForAuthChange() }
    })
  }, [])

  return (
    <div id="App">
      <header>
        <div id="logo-space">
          <h1><img src={logo} alt="logo" id="logo" /><span>Challenge UI</span></h1>
          <p className='header-text'>This is a basic user-interface that allows us to access the ASP.Net API connected to Firebase.</p>
          <p className='header-text'>This interface is a standard React-based implementaiton.</p>
        </div>
        <ProfileDisplay user={user} />
      </header>

      <div id="main-container">
        <InstructionDisplay />

        {
          // replace this with a better user-check
          user === null ?
            <div id="login-or-create-forms" className="neumorphic">
              <LoginForm setUserConfig={setUserConfig} />

              <CreateAccountForm setUserConfig={setUserConfig} />
            </div>
            :
            <ChangePasswordForm user={user} unserializedUserData={unserializedUserData} />
        }
      </div>
      {user === null ? <></> : <TriviaRenderer />}
    </div>
  );
}

export default App;
