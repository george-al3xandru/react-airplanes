import { Container, Flex } from "@mantine/core";
import MatrixCell from "./MatrixCell";

interface MatrixBoardProps {
  board: string[][];
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
  isGameFinished: boolean;
  setIsGameFinished: React.Dispatch<React.SetStateAction<boolean>>;
  setStrikes: React.Dispatch<React.SetStateAction<number>>;
}

const MatrixBoard = (props: MatrixBoardProps) => {
  const handleClick = (rowIndex: number, colIndex: number) => {
    if (!props.isGameFinished) {
      if (props.board[rowIndex][colIndex] === null) {
        const updatedBoard = props.board.map((row, rIndex) =>
          row.map((cell, cIndex) =>
            rIndex === rowIndex && cIndex === colIndex ? "missed" : cell
          )
        );
        props.setBoard(updatedBoard);
      } else if (props.board[rowIndex][colIndex] === "plane") {
        const updatedBoard = props.board.map((row, rIndex) =>
          row.map((cell, cIndex) =>
            rIndex === rowIndex && cIndex === colIndex ? "hit" : cell
          )
        );
        props.setBoard(updatedBoard);
        props.setIsGameFinished(true);
      }
      props.setStrikes((prevValue) => prevValue + 1);
    }
  };

  return (
    <Container size="xs" mt="50px">
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
