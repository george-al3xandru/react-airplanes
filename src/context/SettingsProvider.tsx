import { createContext, useState } from "react";

export const SettingsContext = createContext({
  size: 5,
  setSize: (value: number) => {},
  airplanes: 1,
  setAirplanes: (value: number) => {},
});

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [size, setSize] = useState<number>(5);
  const [airplanes, setAirplanes] = useState<number>(1);

  return (
    <SettingsContext.Provider value={{ size, setSize, airplanes, setAirplanes }}>
      {children}
    </SettingsContext.Provider>
  );
};
