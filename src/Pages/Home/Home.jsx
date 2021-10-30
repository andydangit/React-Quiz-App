import React, {useState, useContext} from 'react'

import GameOver from '../../Components/GameOver/GameOver';
import MainMenu from '../../Components/MainMenu/MainMenu';
import Quiz from '../../Components/Quiz/Quiz';
import Post from "../../posts/posts"
import { QuizContext } from "../../Helpers/Contexts";

import List from '../../Components/List'


function Home() {
// const [gameState, setGameState] = useState("menu");
// const [score, setScore] = useState(0)

    return (
        <div>
            <h1> React Quiz </h1> 
            {/* <QuizContext.Provider value={{gameState, setGameState, score, setScore}}> 
            {gameState === "menu" && <MainMenu />}
            {gameState === "quiz" && <Quiz />}
            {gameState === "gameOver" && <GameOver />}
            </QuizContext.Provider>
            < Post />  */}

           <List />

        </div>
    )
}

export default Home
