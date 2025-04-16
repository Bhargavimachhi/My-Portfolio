import React, { createContext, useContext, useEffect, useState } from "react";

const PuzzleContext = createContext();

const PuzzleProvider = ({ children }) => {
  const [puzzleSolved, setPuzzleSolved] = useState(() => {
    const savedData = localStorage.getItem("puzzleSolved");
    return savedData || {puzzleSolved : false};
  });

  useEffect(() => {
    localStorage.setItem("puzzle", JSON.stringify({puzzleSolved : false}));
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
