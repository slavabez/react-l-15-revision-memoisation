import React, { createContext, useContext } from "react";

const MyContext = createContext();

const ContextDemo = () => {
  const value = useContext(MyContext);
  return <div>Context Value: {value}</div>;
};

const ContextProvider = () => (
  <MyContext.Provider value="Hello from context">
    <ContextDemo />
  </MyContext.Provider>
);

export default ContextProvider;
