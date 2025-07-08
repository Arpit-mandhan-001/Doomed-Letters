import { useEffect } from "react";
import '../styles/Keyboard.css'

const keyBoardRows: string[] = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

type KeyboardProps = {
  userInput: (key: string) => void;
  handleRefresh: () => void;
  isWinner: boolean;
  isGameOver: boolean;
  correctGuess: string[];
  inCorrectGuess: string[];
};

const Keyboard: React.FC<KeyboardProps> = ({
  userInput,
  handleRefresh,
  isWinner,
  isGameOver,
  correctGuess,
  inCorrectGuess,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      const input = e.key.toLowerCase();

      if (input == " ") {
        e.preventDefault();
        handleRefresh();
      } else {
        /^[a-zA-Z]$/.test(input) && userInput(input);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="keyboard">
      {keyBoardRows.map((row, index) => (
        <div className="row" key={index}>
          {row.split("").map((char) => (
            <button
              key={char}
              id={`${char}-btn`}
              className={`char-btn ${
                correctGuess.includes(char)
                  ? "correct-key"
                  : inCorrectGuess.includes(char)
                  ? "incorrectGuess"
                  : ""
              }`}
              disabled={
                isWinner ||
                isGameOver ||
                correctGuess.includes(char) ||
                inCorrectGuess.includes(char)
              }
              onClick={() => userInput(char)}
            >
              {char}
            </button>
          ))}
        </div>
      ))}
      <button
        className={`spacebar-btn ${isGameOver || isWinner ? "next-btn" : ""}`}
        onClick={handleRefresh}
      >
        {isWinner || isGameOver ? "NEXT" : 'REFRESH'}
      </button>
    </div>
  );
};

export default Keyboard;
