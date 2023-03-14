import React from 'react'

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

export default InstructionDisplay