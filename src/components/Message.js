import React from "react";

/**
 * Message component that displays the game status (won or lost)
 * and provides a button to restart the game.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.status - The current status of the game ('won', 'lost', or 'playing').
 * @param {function} props.onRestart - Callback function to restart the game.
 * @example
 * return (
 *   <Message status="won" onRestart={() => console.log("Game restarted")} />
 * )
 */
const Message = ({ status, onRestart }) => {
  return (
    <div>
      {status === "won" && <h2>You Won!</h2>}
      {status === "lost" && <h2>You Lost!</h2>}
      <button onClick={onRestart}>Restart Game</button>
    </div>
  );
};

export default Message;
