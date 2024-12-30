import React from "react";

/**
 * WordDisplay component that shows the current state of the word being guessed in the game.
 * It displays correctly guessed letters and underscores for letters that have not been guessed yet.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.word - The word to be guessed.
 * @param {Array<string>} props.guessedLetters - An array of letters that have been guessed by the player.
 * @example
 * return (
 *   <WordDisplay word="javascript" guessedLetters={['j', 'a', 's']} />
 * )
 */
const WordDisplay = ({ word, guessedLetters }) => {
  return (
    <div>
      {word.split("").map((letter, index) => (
        <span key={index}>
          {guessedLetters.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
};

export default WordDisplay;
