import React, { useState } from 'react'

const TriviaRenderer = () => {
    const [trivia, setTrivia] = useState("")

    const fetchAllTrivia = () => {
        fetch("https://localhost:7047/api/Trivia/index")
            .then(resp => resp.json())
            .then(json => {
                setTrivia(json)
            })
    }


    const fetchNewTrivia = () => {
        fetch("https://localhost:7047/api/Trivia/showRandom")
            .then(resp => resp.json())
            .then(json => {
                console.log(json)
                setTrivia(json)
            })
    }

    const renderTrivia = () => {
        return <ul>
            {
                Array.isArray(trivia) ?
                    trivia.map(t => <li>{t.text}</li>)
                    :
                    <li>{trivia.text}</li>
            }
        </ul>
    }

    return <div>
        <p>(Index) <button onClick={fetchAllTrivia}>Show me what you got, I want to see what you got!</button></p>
        <p>(Show) <button onClick={fetchNewTrivia}>Surprise Me! with your special knowledge, dear Treasure Tree</button></p>
        <div id="trivia-renderer">
            {renderTrivia()}
        </div>

    </div>
}

export default TriviaRenderer