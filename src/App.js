import './App.css';
import { useState } from 'react';

import ChangePasswordForm from './Components/ChangePasswordForm';
import CreateAccountForm from './Components/CreateAccountForm'
import InstructionDisplay from './Components/InstructionDisplay'
import LoginForm from './Components/LoginForm'
import ProfileDisplay from './Components/ProfileDisplay';

const App = () => {
  const [user, setUser] = useState({})

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

export default App;
