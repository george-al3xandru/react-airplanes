import { createStyles } from "@mantine/core";

export const useHeaderStyles = createStyles((theme) => ({
  header: {
    height: "100%",
    padding: "0 15%",

    [theme.fn.smallerThan("xl")]: {
      padding: "0 10%",
    },

    [theme.fn.smallerThan("lg")]: {
      padding: "0 5%",
    },
  },

  logoImage: {
    height: "52px",
  },

  logo: {
    cursor: "pointer"
  }
}));
