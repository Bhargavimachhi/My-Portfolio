import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import { Bone, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const DraggablePuzzleHeading = () => {
  const nodeRef = useRef(null);
  const navigate = useNavigate();
  const [hintIndex, setHintIndex] = useState(0);
  const hints = [
    "There are 4 Different Ways to solve this Puzzle, Explore Hints to Solve the Puzzle 🧩",
    "Think like a sleepy dog 🐶... Where would you find the bone? 🦴 Look Closely 👀",
    "Think like a coder 👩‍💻... How can you use tailwind css to get rid of the dog? 💻",
    "Have you worked with Local Storage ? 📠...Try changing something in local storage ✍️",
    "Skipping the puzzle would be the 4th way to solve the puzzle 😁",
  ];

  const skipPuzzle = () => {
    toast.success("Puzzle Skipped !!!");
    setTimeout(() => {
      markPuzzleAsSolved();
    }, 2000);
  };

  const markPuzzleAsSolved = () => {
    localStorage.setItem("puzzle", JSON.stringify({ puzzleSolved: true }));
    navigate("/");
  };

  const nextHint = () => {
    setHintIndex((prev) => (prev + 1) % hints.length);
  };

  const prevHint = () => {
    setHintIndex((prev) => (prev - 1 + hints.length) % hints.length);
  };

  return (
    <>
      <Draggable nodeRef={nodeRef}>
        <div ref={nodeRef} className="cursor-grab active:cursor-grabbing">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-5xl bg-white p-6 rounded-2xl shadow-md mb-10">
            <h2 className="w-full text-lg md:text-xl font-bold text-center md:text-left leading-snug text-gray-700">
              Wanna See My Portfolio? Uhhh Ahhh 👀
              <br />
              You need to solve this puzzle first 🧩
              <br />
              Get Rid of Dog Somehow 🐶
            </h2>

            <div className="flex gap-4 mt-4 md:mt-0">
              {/* Skip Button */}
              <button
                className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
                onClick={skipPuzzle}
              >
                Skip
              </button>

              {/* Hint Popover */}
              <Popover>
                <PopoverTrigger className="cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-xl transition duration-300">
                  Hint
                </PopoverTrigger>
                <PopoverContent className="w-72 p-4 rounded-xl shadow-xl bg-white flex flex-col items-center relative space-y-4">
                  <p className="text-center text-sm md:text-base mt-2">
                    {hints[hintIndex]}
                  </p>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={prevHint}
                      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer"
                    >
                      <ChevronLeft />
                    </button>
                    <span className="text-xs text-gray-500">
                      Hint {hintIndex + 1} of {hints.length}
                    </span>
                    <button
                      onClick={nextHint}
                      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer"
                    >
                      <ChevronRight />
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </Draggable>
    </>
  );
};
