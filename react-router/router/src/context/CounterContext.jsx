import { createContext, useState } from "react";

export const ContextCounter = createContext(null);

const CounterContext = (props) => {
  const [count, setCount] = useState(2);
//   const ContextCounter = createContext(null);
  return (
    <ContextCounter.Provider value={{count, setCount}}>{props.children}</ContextCounter.Provider>
  );
};

export default CounterContext;
