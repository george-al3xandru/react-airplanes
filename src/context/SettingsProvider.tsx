import { createContext, useState } from "react";

export const SettingsContext = createContext({
  length: 5,
  setLength: (value: number) => {},
});

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [length, setLength] = useState<number>(5);

  return (
    <SettingsContext.Provider value={{ length, setLength }}>
      {children}
    </SettingsContext.Provider>
  );
};
