import { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";

function MantineSetup({ children }: { children: ReactNode }) {
  const ThemeProps = {
    fontFamily: "Roboto, sans-serif",
  };

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ ...ThemeProps }}>
      {children}
    </MantineProvider>
  );
}

export default MantineSetup;
