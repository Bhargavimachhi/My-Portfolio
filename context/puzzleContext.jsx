import React, { createContext, useContext, useEffect, useState } from "react";

const PuzzleContext = createContext();

const PuzzleProvider = ({ children }) => {
  const [puzzleSolved, setPuzzleSolved] = useState(() => {
    const savedData = localStorage.getItem("puzzle");
    return savedData || JSON.stringify({puzzleSolved : false});
  });

  useEffect(() => {
    localStorage.setItem("puzzle", puzzleSolved);
  }, []);

  return (
    <PuzzleContext.Provider value={[puzzleSolved, setPuzzleSolved]}>
      {children}
    </PuzzleContext.Provider>
  );
};

const usePuzzleContext = () => {
  return useContext(PuzzleContext);
};

export { usePuzzleContext, PuzzleProvider };
