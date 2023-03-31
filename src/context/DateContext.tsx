import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface DateContextValue {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
}
const defaultState = {
  date: new Date(),
  setDate: () => {},
};

export const DateContext = createContext<DateContextValue>(defaultState);

interface DateProviderProps {
  children: ReactNode;
}

export function DateProvider({ children }: DateProviderProps) {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <DateContext.Provider
      value={{
        date,
        setDate,
      }}
    >
      {children}
    </DateContext.Provider>
  );
}
