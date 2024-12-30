import React, { useState } from "react";
import Hangman from "./Hangman";
import WordDisplay from "./WordDisplay";
import Keyboard from "./Keyboard";
import Message from "./Message";

/**
 * Game component that manages the state and logic for a Hangman game.
 * It handles the word to guess, the letters guessed by the player,
 * the number of incorrect guesses, and the overall game status.
 *
 * @component
 * @example
 * return (
 *   <Game />
 * )
 */
const Game = () => {
  // State to hold the word to guess
  const [word, setWord] = useState("javascript"); // Example word, you can randomize this
  // State to hold the letters that have been guessed
  const [guessedLetters, setGuessedLetters] = useState([]);
  // State to count the number of incorrect guesses
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  // State to track the current status of the game
  const [gameStatus, setGameStatus] = useState("playing"); // 'playing', 'won', 'lost'

  /**
   * Handles a letter guess by the player.
   * Updates the guessed letters and checks for win/loss conditions.
   *
   * @param {string} letter - The letter guessed by the player.
   */
  const handleGuess = (letter) => {
    // Prevent duplicate guesses or actions if the game is not in progress
    if (guessedLetters.includes(letter) || gameStatus !== "playing") return;

    // Update the list of guessed letters
    setGuessedLetters([...guessedLetters, letter]);

    // Check if the guessed letter is incorrect
    if (!word.includes(letter)) {
      setIncorrectGuesses(incorrectGuesses + 1);
    }

    // Check for loss condition
    if (incorrectGuesses >= 6) {
      setGameStatus("lost");
    }
    // Check for win condition
    else if (
      word.split("").every((l) => guessedLetters.includes(l) || l === " ")
    ) {
      setGameStatus("won");
    }
  };

  /**
   * Restarts the game by resetting the state variables.
   * Optionally randomizes the word if a list of words is provided.
   */
  const restartGame = () => {
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    setGameStatus("playing");
    // Randomize the word here if you have a list of words
    const randomWord = "javascript"; // Replace with your random word logic
    setWord(randomWord);
  };

  return (
    <div>
      <Hangman incorrectGuesses={incorrectGuesses} />
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <Keyboard onGuess={handleGuess} />
      <Message status={gameStatus} onRestart={restartGame} />
    </div>
  );
};

export default Game;
