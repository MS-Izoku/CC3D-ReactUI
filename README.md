# CC3D Challenge UI
This is where we can use the C# API that we made as a companion application, which both connect to the same Firebase Store.  This is a baseline React application using Firebase's own packages, as well as integration with the firebase online UI (from their website).  This acts as the entrypoint to the API application written in C#, which is run elsewhere (as it would be in a development setting, since front and backend servers should be seperate to a degree unless using MVC or similar archetecture).

Due to the simple nature of this SPA, there will be no router or routing, rather all aspects of the simple application will be done using State Management.  If there were to be multiple pages in this web context, there would need to be either a cookie or an item in localStorage (the less-safe option) that represents user data for authentication purposes.

## App Setup / How To
* run npm install in the project directory to install all current packages
* run npm start afterward to start the application, it should be on http://localhost:3000 (HTTP)
* If you're missing any packages, check to see if Node is installled, which is the basic requirement for npm

* The C# API, for the sake of this application, should be on https://localhost:7047 (HTTPS, not HTTP)

* After startup, you can either create an account or log into an existing one
* When signed in (using Firebase as the authentication DB), you click one of the buttons to get one of the following responses from the C# API (assuming it is running)

* One Piece of One Piece Trivia (I do apologize for this dastardly play on words)
* Every Piece of One Piece Trivia (an index route)

* While NYI at this point in the UI, there is functionality in the C# Api to allow for posting, updating, and deleting data from the Entity Framework Core DB

## Components
Due to the nature of how Async code works, there are actually a few requests that need to be made independently.  Each of these requests involve a single component, as well as the firebase integration in our base file.
This is an SPA which incorporates the Firebase lifecycle using an existing token, and a similar approach can be used by any other application looking to communicate with our API.


### Login Form
Existing users need a way to access information on their account, and thusly, we have a Form component.  This form has 2 main fields:
* Email, which corresponds to a unique email on the firebase server
* Password, which is the actual string password the user knows, or is stored on their browser.  This is not made a hash at this point in the frontend facing application

The Username field is only relevant when creating an account, as it is a display name.  It is not used in any login at this time due to the fact that emails are more unique and secure.


### Create Account Form
While we can create users using the Firebase interface online, we should also be able to do so in an application, just in the same way it would be in a production environment.  Customers and application users will not be able to get into our Firebase project and set up an account that way, nor should they for app security reasons.

This is why I chose to create multiple routes, which allows us to do things the way an end-user would normally experience them.

To create an account, we need 3-4 things, noted in our Form:
* Username, which is how a user identifies themselves as a user on this website
* Email, the bread and butter of our authentication to ensure unique accounts per user (to the best of our ability here)
* Password / Password Confirmation, which serve as a unique value that ONLY a user knows, which gives them access to their account.  It is not stored as plaintext in any database anywhere, and is turned from a string into a hash during the encryption process.  Luckily, we do not need to do any of that manually, and a user only needs to write a memorable password twice (once normally, and another to confirm).


### User Display / Logout Button
The User display is the component that tells you that you've logged in, displaying your username, a welcome message, and a button that allows the user to logout of this device.