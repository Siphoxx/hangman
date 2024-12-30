import React from "react";
import Game from "./components/Game"; // Import the Game component
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS for styling
import "./App.css"; // Import the custom CSS file

/**
 * App component that serves as the main entry point for the Hangman game application.
 * It displays a welcome message and renders the Game component.
 *
 * @component
 * @example
 * return (
 *   <App />
 * )
 */
function App() {
  return (
    <div className="App">
      <h1>Welcome to Hangman Game</h1>
      <Game /> {/* Use the Game component here */}
    </div>
  );
}

export default App;
