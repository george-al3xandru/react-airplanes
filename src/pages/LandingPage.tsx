import { useState, useEffect, useContext } from "react";
import MatrixBoard from "../components/Matrix/MatrixBoard";
import NewGameButton from "../components/GameOptions/NewGameButton";

import { SettingsContext } from "../context/SettingsProvider";
import MatchScore from "../components/GameLogs/MatchScore";

const LandingPage = () => {
  const [board, setBoard] = useState<string[][]>([]);
  const [strikes, setStrikes] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const { length } = useContext(SettingsContext);

  const initializeBoard = () => {
    const initialBoard = Array(length)
      .fill(null)
      .map(() => Array(length).fill(null));
    const randomRowIndex = Math.floor(Math.random() * length);
    const randomColIndex = Math.floor(Math.random() * length);
    initialBoard[randomRowIndex][randomColIndex] = "plane";
    setBoard(initialBoard);
    setStrikes(0);
    if (isGameFinished) {
      setIsGameFinished(false);
    }
  };

  useEffect(() => {
    initializeBoard();
  }, [length]); //eslint-disable-line

  return (
    <>
      <MatrixBoard
        board={board}
        setBoard={setBoard}
        isGameFinished={isGameFinished}
        setIsGameFinished={setIsGameFinished}
        setStrikes={setStrikes}
      />
      <MatchScore strikes={strikes} isGameFinished={isGameFinished} align="center"/>
      {isGameFinished && (
        <NewGameButton
          position="center"
          variant="outline"
          initializeBoard={initializeBoard}
        />
      )}
    </>
  );
};

export default LandingPage;
