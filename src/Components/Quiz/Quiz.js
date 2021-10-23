import React, {useState} from 'react'

import {Questions} from '../../Helpers/Questions'

function Quiz() {

    const [currentQuestion, setCurrentQuestion] = useState(0)

    return (
        <div className="Quiz">
            <h1>{Questions[currentQuestion].prompt} </h1>
        </div>
    )
}

export default Quiz
