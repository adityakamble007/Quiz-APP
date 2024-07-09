import React from "react";
import { GameStateContext } from "../helpers/Contexts";

import { useContext} from "react";
import { Questions } from "../helpers/Questions";

const EndScreen = () =>{
    const{score,setScore,setGameState,userName} = useContext(GameStateContext);

    const restartQuiz = () => {
        setScore(0)
        setGameState('menu')
    }
    return(
        <div className="w-[500px] h-[500px] bg-blue-300 flex flex-col justify-center items-center rounded-xl">
            <h1 className="text-xl font-bold m-3 p-1 ">Quiz Finished</h1>
            <h1 className="font-bold">{userName}</h1>
            <h1 className="text-xl font-bold m-3 p-1 text-green-500 ">{score}/ {Questions.length}</h1>
            <button className="w-[200px] h-[50px] m-[5px] p-[5px] border-none rounded text-xl bg-green-800 text-white"
            onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}
export default EndScreen;