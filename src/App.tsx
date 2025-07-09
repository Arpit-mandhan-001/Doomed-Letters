import { useEffect, useState } from "react";
import "./styles/App.css";
import { wordList } from "./utlis";
import Keyboard from "./components/Keyboard";
import Hangman from "./components/Hangman";
import RandomRoastLine from "./components/RandomRoastLines";

const App: React.FC = () => {
  const [keyBoardKey, setKeyBoardKey] = useState<number>(1); // track the current key or key press.
  const [userInput, setUserInput] = useState<string | null>(null); //Stores the current guess input by user.
  const [correctGuess, setCorrectGuess] = useState<string[]>([]); // stores the array of all correct guess.
  const [inCorrectGuess, setInCorrectGuess] = useState<string[]>([]); // stores the array of all incorrect guess.
  const attempts = 7 - inCorrectGuess.length; // total attempts left.
  const [wordObj, setWordObj] = useState(
    wordList[Math.floor(Math.random() * 850)]
  ); // word that user have to guess.
  const [charLeft, setCharLeft] = useState(wordObj.word.split("")); // track the reamining character in the word that need to be guessed.
  const isWinner = !charLeft.length; // check if player has won
  const isGameOver = !attempts; // check if game is over, if no attempts left.
  const [hintReveal, setHintReveal] = useState(false); // hint toggle.

  function handleRefresh() {
    setWordObj(wordList[Math.floor(Math.random() * wordList.length)]);
  }

  function handleUserInput(input: string) {
    if (correctGuess.includes(input) || inCorrectGuess.includes(input)) return; // return early if user selected word is duplicate
    if (charLeft.includes(input)) {
      //for correct Guesses
      setCorrectGuess((prev) => [...prev, input]);
      setCharLeft(charLeft.filter((char) => char != input));
    } else {
      // for incorrect Guesses
      setInCorrectGuess((prev) => [...prev, input]);
    }
  }

  useEffect(() => {
    setKeyBoardKey((prev) => prev + 1);
    setCorrectGuess([]);
    setInCorrectGuess([]);
    setCharLeft(wordObj.word.split(""));
  }, [wordObj]);

  useEffect(() => {
    if (userInput) charLeft.length && attempts && handleUserInput(userInput);
  }, [userInput]);

  return (
    <>
      <main>
        <header>
          <span className="a-span">D</span>OO
          <span className="d-span">M </span>L<span className="a-span">E</span>T
          <span className="d-span">T</span>
          <div className="rating-container">
            <span className="label-span">Suitable for</span>
            <span className="rating-span">14+</span>
          </div>
        </header>
        <section>
          <div className="game-container">
            <div
              className={`hint-container ${hintReveal ? "hint-revealed" : ""}`}
            >
              {hintReveal ? wordObj.hint : <RandomRoastLine />}
            </div>
            <div className="word-container">
              {wordObj.word.split("").map((char, index) => (
                <div key={`${wordObj.word} -${index}`} className="char-box">
                  <span
                    key={char}
                    className={`char-span ${
                      correctGuess.includes(char)
                        ? "correct-guess"
                        : !attempts
                        ? "not-gussed"
                        : ""
                    }`}
                  >
                    {correctGuess.includes(char) || isGameOver || isWinner
                      ? char
                      : "🖕"}
                  </span>
                </div>
              ))}
            </div>
            <div className="actions-menu">
              <div className="attempts-box">{attempts} attempts Lefts</div>
              <div className="hint-box">
                <span className="hint-label">
                  {hintReveal ? "hide" : "show"} Hint
                </span>
                <label className="switch">
                  <input
                    type="checkbox"
                    id="hint-toggle"
                    defaultChecked={hintReveal}
                    onClick={() => setHintReveal((prev) => !prev)}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div className="keyboard-container">
              <Keyboard
                key={keyBoardKey}
                userInput={setUserInput}
                handleRefresh={handleRefresh}
                isWinner={isWinner}
                isGameOver={isGameOver}
                correctGuess={correctGuess}
                inCorrectGuess={inCorrectGuess}
              ></Keyboard>
            </div>
          </div>
          <div className="drawing-container">
            <Hangman attempts={attempts} />
          </div>
        </section>
        <footer>
          Made by &nbsp;
          <a href="https://github.com/Arpit-mandhan-001">Arpit Mandhan</a>
        </footer>
      </main>
    </>
  );
};

export default App;
