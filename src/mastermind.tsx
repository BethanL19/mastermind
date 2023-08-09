import { useState } from "react";
import { colours, checkCombo, createCode, guessesBoard } from "./mastermindFns";

export function MasterMind(): JSX.Element {
  const code = createCode();
  const [guess, setGuess] = useState<string[]>([]);

  const handleGuessSelection = () => {};

  const colourButtons = colours.map((colour, index) => (
    <button key={index} onClick={handleGuessSelection}>
      {colour}
    </button>
  ));
  const board = guessesBoard.map((line, index) => (
    <div className="guessRow" key={index}>
      {line}
    </div>
  ));
  return (
    <>
      <div className="Board">{board}</div>
      {colourButtons}
    </>
  );
}
