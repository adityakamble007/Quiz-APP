
import { Questions } from "../helpers/Questions";
import { GameStateContext } from "../helpers/Contexts";

import { useContext, useState } from "react";
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const[optionChosen,setOptionChosen] = useState("");

  const{score,setScore, gameState,setGameState} = useContext(GameStateContext);

  const chooseOption = (option) =>{
    setOptionChosen(option);
  };

  const nextQuetion = () =>{
    if(Questions[currentQuestion].asnwer == optionChosen){
       setScore(score+1)
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz=()=>{
    if(Questions[currentQuestion].asnwer == optionChosen){
        setScore(score+1)
     }
    setGameState('finished')
  }
  return (
    <div className="w-[500px] h-[500px] bg-blue-300 flex flex-col justify-center items-center rounded-xl">
      <h1 className="text-xl font-bold m-3 p-1 ">{Questions[currentQuestion].prompt}</h1>
      <div>
        <button className="w-[300px] h-[50px] m-[5px] p-[5px] border-none rounded text-xl bg-amber-50"
        onClick={()=>{chooseOption('optionA')}}
        >
          {Questions[currentQuestion].optionA}

          {Questions[currentQuestion].optionD}
        </button>
        <button className="w-[300px] h-[50px] m-[5px] p-[5px] border-none rounded text-xl bg-amber-50"
        onClick={()=>{chooseOption('optionB')}}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button className="w-[300px] h-[50px] m-[5px] p-[5px] border-none rounded text-xl bg-amber-50"
        onClick={()=>{chooseOption('optionC')}}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button className="w-[300px] h-[50px] m-[5px] p-[5px] border-none rounded text-xl bg-amber-50"
        onClick={()=>{chooseOption('optionD')}}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>
    {
        currentQuestion == Questions.length -1 ? (
            <button className="w-[200px] h-[50px] m-[5px] p-[5px] border-none rounded text-xl bg-green-800 text-white"
            onClick={finishQuiz}>Finish Quiz</button> 
        ):(
            <button className="w-[200px] h-[50px] m-[5px] p-[5px] border-none rounded text-xl bg-green-800 text-white"
            onClick={nextQuetion}>Next Question</button> 
        )
    }
      
    </div>
  );
}

export default Quiz;
