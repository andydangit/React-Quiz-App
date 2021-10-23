import React, {useState, useContext} from 'react'

import GameOver from '../../Components/GameOver/GameOver';
import MainMenu from '../../Components/MainMenu/MainMenu';
import Quiz from '../../Components/Quiz/Quiz';

import { QuizContext } from "../../Helpers/Contexts";

function Home() {
const [gameState, setGameState] = useState("menu");

    return (
        <div>
            <h1> Home</h1> 
            <QuizContext.Provider value={{gameState, setGameState}}> 
            {gameState === "menu" && <MainMenu />}
            {gameState === "Quiz" && <Quiz />}
            {gameState === "GameOver" && <GameOver />}
            </QuizContext.Provider>

        </div>
    )
}

export default Home
