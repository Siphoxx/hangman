### Explanation:

- **Notes for Contributors**: This section is added at the end of the README to provide guidance for anyone who might contribute to the project in the future. It helps maintain clarity about what needs to be updated or considered.
- **Markdown Formatting**: This is a reminder for you or other contributors about the formatting used in the README.

- Feel free to adjust the wording or structure as needed!

# Hangman Game

## Overview

Hangman is a classic word-guessing game where players try to guess a hidden word by suggesting letters within a certain number of guesses. The game is played by one player (the guesser) and can be enjoyed by players of all ages.

## Objective

The objective of the game is to guess the hidden word before running out of incorrect guesses. Each incorrect guess results in a part of a hangman being drawn. The game ends when the player either successfully guesses the word or exhausts all allowed incorrect guesses.

## Game Rules

1. **Word Selection**:

   - A word is chosen randomly from a predefined list of words. The player does not know the word at the start of the game.

2. **Guessing Letters**:

   - The player guesses one letter at a time.
   - If the guessed letter is in the word, it is revealed in its correct position(s).
   - If the guessed letter is not in the word, it counts as an incorrect guess.

3. **Incorrect Guesses**:

   - The player is allowed a limited number of incorrect guesses (typically 6).
   - Each incorrect guess results in a part of the hangman being drawn (head, body, arms, legs).

4. **Winning the Game**:

   - The player wins if they successfully guess all the letters in the word before reaching the maximum number of incorrect guesses.

5. **Losing the Game**:

   - The player loses if they reach the maximum number of incorrect guesses before guessing the word.

6. **Restarting the Game**:
   - After a game is completed (either won or lost), the player has the option to restart the game and play again.

## How to Play

1. Start the game by clicking on the letters displayed on the keyboard.
2. Keep track of the letters you have guessed and the number of incorrect guesses.
3. Try to guess the word before the hangman is fully drawn!

## Installation

- To run the Hangman game locally, follow these steps:

1. Clone the repository:

   - git clone <https://github.com/Siphoxx/hangman>

   - cd hangman

   - npm install

   - npm start

## Contact

- For any questions or feedback, please reach out to smogtolegang@gmail.com.
