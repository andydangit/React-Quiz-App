import React, {useState, useContext} from 'react'

import GameOver from '../../Components/GameOver/GameOver';
import MainMenu from '../../Components/MainMenu/MainMenu';
import Quiz from '../../Components/Quiz/Quiz';

import { QuizContext } from "../../Helpers/Contexts";

function Home() {
const [gameState, setGameState] = useState("menu");

    return (
        <div>
            <h1> React Quiz </h1> 
            <QuizContext.Provider value={{gameState, setGameState}}> 
            {gameState === "menu" && <MainMenu />}
            {gameState === "quiz" && <Quiz />}
            {gameState === "gameOver" && <GameOver />}
            </QuizContext.Provider>

        </div>
    )
}

export default Home
