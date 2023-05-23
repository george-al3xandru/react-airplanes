import { Box } from "@mantine/core";
import { useMatrixStyles } from "./Matrix.styles";

interface MatrixCellProps {
  handleClick: (rowIndex: number, colIndex: number) => void;
  cell: string;
  colIndex: number;
  rowIndex: number;
}

const MatrixCell = (props: MatrixCellProps) => {
  const { classes } = useMatrixStyles(props.cell);
  return (
    <Box
      onClick={() => props.handleClick(props.rowIndex, props.colIndex)}
      className={classes.cell}
    >
      {props.cell === "hit" && (
        <img
          src="/images/wrecked-plane.png"
          alt="logo"
          className={classes.wreckedPlane}
        />
      )}
    </Box>
  );
};

export default MatrixCell;
