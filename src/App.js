import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [user, setUser] = useState({})

  return (
    <div id="App">
      <header>
        <h1>CC3D Challenge</h1>
        <p>This is a basic user-interface that allows us to access the ASP.Net API connected to Firebase.</p>
        <p>This interface is a standard React-based implementaiton.</p>
      </header>

      <div id="main-container">
        <InstructionDisplay />

        {
          // replace this with a better user-check
          Object.keys(user).length !== 0 ?

            <div id="login-or-create-forms">
              <LoginForm setUser={setUser} />

              <CreateAccountForm setUser={setUser} />
            </div> : <ChangePasswordForm user={user} />

        }

      </div>
    </div>
  );
}



const LoginForm = () => {
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

const CreateAccountForm = () => {
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

const ChangePasswordForm = () => {
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

    <p>Create a website that allows a user to create an account and then login to that account.
      Their account should take a username, email, and password. There should be an option to change the password while logged in.
      The user account database should be created in Firebase while the rest can be structured in whatever web development languages you’d like.</p>

    <p>This website should make a single API call from an API you have written in C#.</p>

    <p>Outside of these instructions, this assessment is open ended. Have fun with it and let your personal programming style shine through. Make it as weird or unique as you’d like.</p>

    <p>Please document your code. Feel free to host this project online for review but the final submission will be in the form of a GitHub repository link. This is due by next Friday, the 17th.</p>

    <p>Thank you for your interest in Custom Color 3D!</p>
  </div>
}

export default App;
