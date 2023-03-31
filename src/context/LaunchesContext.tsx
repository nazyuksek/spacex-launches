import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface LaunchesContextValue {
  launches: Array<object>;
  setLaunches: Dispatch<SetStateAction<Array<object>>>;
}
const defaultState = {
  launches: [],
  setLaunches: () => {},
};

export const LaunchesContext =
  createContext<LaunchesContextValue>(defaultState);

interface LaunchesProviderProps {
  children: ReactNode;
}

export function LaunchesProvider({ children }: LaunchesProviderProps) {
  const [launches, setLaunches] = useState<Array<object>>([]);

  return (
    <LaunchesContext.Provider
      value={{
        launches,
        setLaunches,
      }}
    >
      {children}
    </LaunchesContext.Provider>
  );
}
