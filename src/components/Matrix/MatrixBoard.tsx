import { Container, Flex } from "@mantine/core";
import MatrixCell from "./MatrixCell";
import { useState, useEffect, useContext } from "react";
import { SettingsContext } from "../../context/SettingsProvider";

interface MatrixBoardProps {
  board: string[][];
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
  isGameFinished: boolean;
  setIsGameFinished: React.Dispatch<React.SetStateAction<boolean>>;
  setStrikes: React.Dispatch<React.SetStateAction<number>>;
  airplanesHit: number;
  setAirplanesHit: React.Dispatch<React.SetStateAction<number>>;
}

const MatrixBoard = (props: MatrixBoardProps) => {
  const { airplanes } = useContext(SettingsContext);
 
  const handleClick = (rowIndex: number, colIndex: number) => {
    if (props.isGameFinished) {
      return;
    }

    const cellValue = props.board[rowIndex][colIndex];

    if (cellValue === null) {
      const updatedBoard = props.board.map((row, rIndex) =>
        row.map((cell, cIndex) =>
          rIndex === rowIndex && cIndex === colIndex ? "missed" : cell
        )
      );
      props.setBoard(updatedBoard);
    } else if (cellValue === "plane") {
      const updatedBoard = props.board.map((row, rIndex) =>
        row.map((cell, cIndex) =>
          rIndex === rowIndex && cIndex === colIndex ? "hit" : cell
        )
      );
      props.setBoard(updatedBoard);
      props.setAirplanesHit((prevValue) => prevValue + 1);
      if (props.airplanesHit === airplanes - 1) {
        props.setIsGameFinished(true);
      }
    } else return;

    props.setStrikes((prevValue) => prevValue + 1);
  };

  return (
    <Container fluid mt="50px">
      {props.board.map((row, rowIndex) => (
        <Flex justify="center" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <MatrixCell
              key={colIndex}
              colIndex={colIndex}
              rowIndex={rowIndex}
              handleClick={handleClick}
              cell={cell}
            />
          ))}
        </Flex>
      ))}
    </Container>
  );
};

export default MatrixBoard;
