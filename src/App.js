import './App.css';
import { useState } from 'react';

const App = () => {
  const [user, setUser] = useState({})
  const [firebaseToken , setFirebaseToken] = useState({})

  const userExists = () => {
    if (Object.keys(user).length > 0) return false;

    for (const key in Object.keys(user)) {
      if (key === undefined || key === "") return false;                                    // there are blank keys
      if (user[key] === null || user[key] !== undefined || user[key] === "") return false;  // if there are null values in any key/value pair
    }

    return true;
  }

  return (
    <div id="App">
      <header>
        <h1>CC3D Challenge</h1>
        <p>This is a basic user-interface that allows us to access the ASP.Net API connected to Firebase.</p>
        <p>This interface is a standard React-based implementaiton.</p>
      </header>

      <ProfileDisplay user={user} />
      <div id="main-container">
        <InstructionDisplay />

        {
          // replace this with a better user-check
          userExists ?

            <div id="login-or-create-forms">
              <LoginForm setUser={setUser} />

              <CreateAccountForm setUser={setUser} />
            </div>
            :
            <ChangePasswordForm user={user} />
        }

      </div>
    </div>
  );
}



const LoginForm = props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const onSubmit = (e) => {
    e.preventDefault(); // prevents the page from auto-refreshing when logging in
  }

  return <div>
    <h2>Login</h2>
    <form onSubmit={onSubmit}>
      <label>Username:</label>
      <input type="text" name="username" onChange={setUsername} value={username} />

      <label>Password:</label>
      <input type="password" name="password" onChange={setPassword} value={password} />


      <input type="submit" />
    </form>
  </div>
}

const CreateAccountForm = props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [email, setEmail] = useState("")

  const onSubmit = (e) => {
    e.preventDefault(); // prevents the page from auto-refreshing when logging in
  }

  return <div>
    <h2>Create New Account</h2>
    <form onSubmit={onSubmit}>
      <label>Username:</label>
      <input type="text" name="username" onChange={setUsername} value={username} />

      <label>Email:</label>
      <input type="email" name="email" onChange={setEmail} value={email} />

      <label>Password:</label>
      <input type="password" name="password" onChange={setPassword} value={password} />

      <label>Confirm Password:</label>
      <input type="password-confirmation" name="password-confirmation" onChange={setPasswordConfirmation} value={passwordConfirmation} />

      <input type="submit" />
    </form>
  </div>
}

const ChangePasswordForm = props => {
  const [currentPassword, setCurrentPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return <div id="change-password-form">
    <h2>Change Password</h2>
    <form onSubmit={onSubmit}>
      <label>Current Password:</label>
      <input name="current-password" type="password" value={currentPassword} onChange={setCurrentPassword} />

      <label>New Password:</label>
      <input name="new-password" type="password" value={confirmPassword} onChange={setConfirmPassword} />

      <label>Confirm New Password:</label>
      <input name="confirm-new-password" type="password" value={confirmNewPassword} onChange={setConfirmNewPassword} />
      <input type="submit" />
    </form>
  </div>
}

const InstructionDisplay = () => {
  return <div id="instructions">
    <h2>Challenge instructions</h2>
    <p>Please complete the assessment below. If you have any questions or challenges while completing this assessment, feel free to reach out and ask for clarification.</p>

    <ul>
    <li>Create a website that allows a user to create an account and then login to that account.
      Their account should take a username, email, and password. There should be an option to change the password while logged in.
      The user account database should be created in Firebase while the rest can be structured in whatever web development languages you’d like.</li>

    <li>This website should make a single API call from an API you have written in C#.</li>

    <li>Outside of these instructions, this assessment is open ended. Have fun with it and let your personal programming style shine through. Make it as weird or unique as you’d like.</li>

    <li>Please document your code. Feel free to host this project online for review but the final submission will be in the form of a GitHub repository link. This is due by next Friday, the 17th.</li>
    </ul>

    <p>Thank you for your interest in Custom Color 3D!</p>
  </div>
}

const ProfileDisplay = props => {
  const LogoutButton = () => <button onClick={()=>{}}>Logout</button>

  return props.user ? <div>Please Sign In</div> : <div>
    User Display!
    <LogoutButton />
  </div>
}

export default App;
