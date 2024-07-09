import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
function Menu() {
    const {gameState, setGameState,userName,setUserName} = useContext(GameStateContext);
  return (
    <div className="w-[500px] h-[500px] bg-blue-300 flex flex-col justify-center items-center rounded-xl">
        <label>Enter Your Name </label>
      <input
        className="w-[300px] h-[50px] m-[5px] p-[5px] border-none rounded text-xl bg-amber-50"
        type="text"
        placeholder="Ex. Aditya Kamble"
        onChange={(event)=>{
            setUserName(event.target.value);
        }}
      />
      <button className="w-[300px] h-[50px] m-[5px] p-[5px] border-none rounded text-xl bg-green-800" onClick = {()=>{setGameState("playing")}}>
        Start Quiz
      </button>
    </div>
  );
}
export default Menu;
