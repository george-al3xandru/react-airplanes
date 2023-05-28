import { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import MatrixBoard from "../components/Matrix/MatrixBoard";
import NewGameButton from "../components/GameOptions/NewGameButton";
import { SettingsContext } from "../context/SettingsProvider";
import MatchScore from "../components/Scoreboard/MatchScore";
import ScoreboardButton from "../components/Scoreboard/ScoreboardButton";
import { Scoreboard } from "../common/types";
import Airplanes from "../components/Scoreboard/Airplanes";

const LandingPage = () => {
  const [board, setBoard] = useState<string[][]>([]);
  const [scoreboard, setScoreboard] = useState<Scoreboard[]>([]);
  const [strikes, setStrikes] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [airplanesHit, setAirplanesHit] = useState(0);
  const [timer, setTimer] = useState(0);

  const { size, airplanes } = useContext(SettingsContext);

  const initializeBoard = (size: number) => {
    const initialBoard = Array(size)
      .fill(null)
      .map(() => Array(size).fill(null));

    for (let i = 0; i < airplanes; i++) {
      const randomRowIndex = Math.floor(Math.random() * size);
      const randomColIndex = Math.floor(Math.random() * size);
      let cellValue = initialBoard[randomRowIndex][randomColIndex];
      if (cellValue === "plane") {
        i--;
      }
      initialBoard[randomRowIndex][randomColIndex] = "plane";
    }

    setBoard(initialBoard);
    setStrikes(0);
  };

  const reinitializeBoard = () => {
    initializeBoard(size);
    setIsGameFinished(false);
    setAirplanesHit(0)
    setTimer(0);
  };

  const registerScore = () => {
    const newScore = {
      id: uuidv4(),
      strikes: strikes,
      date: new Date(),
      time: timer,
    };

    setScoreboard((prevValues) => [...prevValues, newScore]);
  };

  useEffect(() => {
    if (isGameFinished) registerScore();

    let intervalId: NodeJS.Timeout | null = null;

    if (!isGameFinished) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isGameFinished]); //eslint-disable-line

  useEffect(() => {
    initializeBoard(size);
  }, [size, airplanes]); //eslint-disable-line

  return (
    <>
      <ScoreboardButton position="center" scoreboard={scoreboard} />
      <MatrixBoard
        board={board}
        setBoard={setBoard}
        isGameFinished={isGameFinished}
        setIsGameFinished={setIsGameFinished}
        setStrikes={setStrikes}
        airplanesHit={airplanesHit}
        setAirplanesHit={setAirplanesHit}
      />
      <Airplanes airplanes={airplanes} airplanesHit={airplanesHit}/>
      <MatchScore
        strikes={strikes}
        isGameFinished={isGameFinished}
        align="center"
      />
      {isGameFinished && (
        <NewGameButton
          position="center"
          variant="outline"
          reinitializeBoard={reinitializeBoard}
        />
      )}
    </>
  );
};

export default LandingPage;
