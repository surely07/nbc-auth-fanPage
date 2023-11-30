import { createContext, useState } from "react";

export const LetterContext = createContext(null);

function LetterContextProvider({ children }) {
  const [letters, setLetters] = useState([]);

  return (
    <LetterContext.Provider value={{ letters, setLetters }}>
      {children}
    </LetterContext.Provider>
  );
}

export default LetterContextProvider;
