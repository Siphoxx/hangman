import React from "react";

/**
 * Hangman component that displays the current state of the hangman figure
 * based on the number of incorrect guesses made by the player.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} props.incorrectGuesses - The number of incorrect guesses made by the player.
 * @example
 * return (
 *   <Hangman incorrectGuesses={3} />
 * )
 */
const Hangman = ({ incorrectGuesses }) => {
  // Array of SVG elements representing the hangman stages
  const hangmanStages = [
    // Stage 0: Empty gallows
    <svg width="100" height="200" key="0">
      <line x1="10" y1="190" x2="90" y2="190" stroke="black" />
      <line x1="50" y1="10" x2="50" y2="190" stroke="black" />
      <line x1="10" y1="10" x2="50" y2="10" stroke="black" />
      <line x1="10" y1="10" x2="10" y2="30" stroke="black" />
    </svg>,
    // Stage 1: Head
    <svg width="100" height="200" key="1">
      <line x1="10" y1="190" x2="90" y2="190" stroke="black" />
      <line x1="50" y1="10" x2="50" y2="190" stroke="black" />
      <line x1="10" y1="10" x2="50" y2="10" stroke="black" />
      <line x1="10" y1="10" x2="10" y2="30" stroke="black" />
      <circle cx="50" cy="40" r="10" stroke="black" fill="none" />
    </svg>,
    // Stage 2: Body
    <svg width="100" height="200" key="2">
      <line x1="10" y1="190" x2="90" y2="190" stroke="black" />
      <line x1="50" y1="10" x2="50" y2="190" stroke="black" />
      <line x1="10" y1="10" x2="50" y2="10" stroke="black" />
      <line x1="10" y1="10" x2="10" y2="30" stroke="black" />
      <circle cx="50" cy="40" r="10" stroke="black" fill="none" />
      <line x1="50" y1="50" x2="50" y2="130" stroke="black" />
    </svg>,
    // Stage 3: Left Arm
    <svg width="100" height="200" key="3">
      <line x1="10" y1="190" x2="90" y2="190" stroke="black" />
      <line x1="50" y1="10" x2="50" y2="190" stroke="black" />
      <line x1="10" y1="10" x2="50" y2="10" stroke="black" />
      <line x1="10" y1="10" x2="10" y2="30" stroke="black" />
      <circle cx="50" cy="40" r="10" stroke="black" fill="none" />
      <line x1="50" y1="50" x2="50" y2="130" stroke="black" />
      <line x1="50" y1="70" x2="30" y2="90" stroke="black" />
    </svg>,
    // Stage 4: Right Arm
    <svg width="100" height="200" key="4">
      <line x1="10" y1="190" x2="90" y2="190" stroke="black" />
      <line x1="50" y1="10" x2="50" y2="190" stroke="black" />
      <line x1="10" y1="10" x2="50" y2="10" stroke="black" />
      <line x1="10" y1="10" x2="10" y2="30" stroke="black" />
      <circle cx="50" cy="40" r="10" stroke="black" fill="none" />
      <line x1="50" y1="50" x2="50" y2="130" stroke="black" />
      <line x1="50" y1="70" x2="30" y2="90" stroke="black" />
      <line x1="50" y1="70" x2="70" y2="90" stroke="black" />
    </svg>,
    // Stage 5: Left Leg
    <svg width="100" height="200" key="5">
      <line x1="10" y1="190" x2="90" y2="190" stroke="black" />
      <line x1="50" y1="10" x2="50" y2="190" stroke="black" />
      <line x1="10" y1="10" x2="50" y2="10" stroke="black" />
      <line x1="10" y1="10" x2="10" y2="30" stroke="black" />
      <circle cx="50" cy="40" r="10" stroke="black" fill="none" />
      <line x1="50" y1="50" x2="50" y2="130" stroke="black" />
      <line x1="50" y1="70" x2="30" y2="90" stroke="black" />
      <line x1="50" y1="70" x2="70" y2="90" stroke="black" />
      <line x1="50" y1="130" x2="30" y2="170" stroke="black" />
    </svg>,
    // Stage 6: Right Leg
    <svg width="100" height="200" key="6">
      <line x1="10" y1="190" x2="90" y2="190" stroke="black" />
      <line x1="50" y1="10" x2="50" y2="190" stroke="black" />
      <line x1="10" y1="10" x2="50" y2="10" stroke="black" />
      <line x1="10" y1="10" x2="10" y2="30" stroke="black" />
      <circle cx="50" cy="40" r="10" stroke="black" fill="none" />
      <line x1="50" y1="50" x2="50" y2="130" stroke="black" />
      <line x1="50" y1="70" x2="30" y2="90" stroke="black" />
      <line x1="50" y1="70" x2="70" y2="90" stroke="black" />
      <line x1="50" y1="130" x2="30" y2="170" stroke="black" />
      <line x1="50" y1="130" x2="70" y2="170" stroke="black" />
    </svg>,
  ];

  return <div>{hangmanStages[incorrectGuesses]}</div>;
};

export default Hangman;
