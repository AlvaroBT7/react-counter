import { useState, createContext } from "react";

export const CounterContext = createContext();

const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const value = {
    counter,
    setCounter,
  };
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export default CounterContextProvider;
