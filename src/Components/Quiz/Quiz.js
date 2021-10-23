import React, { useState } from "react";

import { Questions } from "../../Helpers/Questions";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("")

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt} </h1>
      <div className="options">
          {/* this will register the option that is pick  */}
        <button onClick={() => setOptionChosen("A")}> {Questions[currentQuestion].optionA} </button>
        <button onClick={() => setOptionChosen("B")}> {Questions[currentQuestion].optionB} </button>
        <button onClick={() => setOptionChosen("C")}> {Questions[currentQuestion].optionC} </button>
        <button onClick={() => setOptionChosen("D")}> {Questions[currentQuestion].optionD} </button>
      </div>

      <button> Next Question </button>
    </div>
  );
}

export default Quiz;
