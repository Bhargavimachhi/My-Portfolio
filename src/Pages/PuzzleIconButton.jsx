import { Puzzle } from "lucide-react"; // You can replace with your icon lib
import React from "react";
import { useNavigate } from "react-router-dom";

export const PuzzleIconButton = () => {
  const navigate = useNavigate();
  return (
    <div
      className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full shadow-xl bg-violet-500 hover:bg-violet-600 text-white flex items-center justify-center cursor-pointer transition-transform duration-300 ease-out hover:scale-110"
      onClick={() => navigate("/My-Portfolio/puzzle")}
      title="Puzzle"
    >
      <Puzzle size={40} />
    </div>
  );
};
