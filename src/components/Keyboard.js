import React from "react";

/**
 * Keyboard component that displays a set of buttons for each letter of the alphabet.
 * When a letter is clicked, it triggers the onGuess function passed as a prop.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {function} props.onGuess - Callback function to handle letter guesses.
 * @example
 * return (
 *   <Keyboard onGuess={(letter) => console.log(letter)} />
 * )
 */
const Keyboard = ({ onGuess }) => {
  // Array of letters from A to Z
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div>
      {letters.map((letter) => (
        <button key={letter} onClick={() => onGuess(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
