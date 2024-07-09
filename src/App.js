import { useState } from "react";
import Menu from "./components/Menu";
import "./App.css";
import Quiz from "./components/Quiz";

import { GameStateContext } from "./helpers/Contexts";
import EndScreen from "./components/EndScreen";

//['Menue','player','finished']
function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore]= useState(0)

  return (
    <div className="text-center font-sans flex items-center justify-center flex-col">
      <h1 className="text-xl font-bold">Quiz App</h1>
      <GameStateContext.Provider value = {{gameState,setGameState,userName,setUserName,score,setScore}}>
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz/>}
        {gameState === "finished" && <EndScreen/>}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
