import React, {useState} from 'react'
import GameOver from '../../Components/GameOver/GameOver';
import MainMenu from '../../Components/MainMenu/MainMenu';
import Quiz from '../../Components/Quiz/Quiz';

function Home() {
const [gameState, setGameState] = useState("menu");

    return (
        <div>
            <h1> Home</h1> 
{/* determine the game state on which value it will render  */}
            {gameState === "menu" && <MainMenu />}
            {gameState === "Quiz" && <Quiz />}
            {gameState === "GameOver" && <GameOver />}

        </div>
    )
}

export default Home
