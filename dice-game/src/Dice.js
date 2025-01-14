import React, { useState } from "react";
import "./Dice.css";
import Die from "./Die.js";

/** A game can be any number of Dies, all with random values. */

const Dice = ({ numDice = 6, title = "Main Game", maxVal = 20 }) => {
  const [numbers, setNumbers] = useState(Array.from({ length: numDice }));
  const rollDice = () =>
    setNumbers((numbers) => 
      numbers.map(() => Math.floor(Math.random() * maxVal) + 1)
    )
  return (
    <div className="Dice">
      <h2>{title}</h2>
      {numbers.map((num) => <Die val={num} />)}
      <button onClick={rollDice}>Roll</button>
    </div>
  );
};

Dice.defaultProps = {
  title: "Main Game",
  numDice: 6,
  maxVal: 20,
};

export default Dice;
