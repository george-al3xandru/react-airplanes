import { createContext, useState } from "react";

export const SettingsContext = createContext({
  size: 5,
  setSize: (value: number) => {},
});

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [size, setSize] = useState<number>(5);

  return (
    <SettingsContext.Provider value={{ size, setSize }}>
      {children}
    </SettingsContext.Provider>
  );
};
