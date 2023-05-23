import { createStyles } from "@mantine/core";

export const useMatrixStyles = createStyles((theme, cell: string) => ({
  cell: {
    display: "inline-block",
    width: "40px",
    height: "40px",
    border: "1px solid black",
    textAlign: "center",
    cursor: "pointer",
    verticalAlign: "top",
    backgroundColor:
      cell === "missed"
        ? theme.colors.red[9]
        : cell === "hit"
        ? theme.colors.green[5]
        : theme.white,
  },

  wreckedPlane: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));
