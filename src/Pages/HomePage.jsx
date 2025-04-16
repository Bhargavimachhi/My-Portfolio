import { useState } from "react";
import video from "../assets/Videos/video.mp4";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { Navbar } from "../components/NavBar";
import { MyIntro } from "./MyIntro";
import { Skills } from "./Skills";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  const hints = [
    "There are 3 Ways to solve this Puzzle",
    "Think like a sleepy dog 🐶... Where would you find the bone? 🦴",
    "Think like a coder 👩‍💻... How can you use tailwind css to get rid of the dog? 💻",
    "Look closely at what moves when you hover 👀",
  ];

  const [hintIndex, setHintIndex] = useState(0);
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [showInputText, setShowInputText] = useState(false);
  const [text, setText] = useState("");

  const checkAnswerOfText = (curr) => {
    setText(curr);

    if (curr == "hidden" || curr == "invisible" || curr == "opacity-0") {
      toast.success(
        "Hurray !!!" +
          curr +
          " class name Makes the Division Invisible in Tailwind CSS"
      );
      setTimeout(() => {
        setPuzzleSolved(true);
      }, 3000);
    }
  };

  const skipPuzzle = () => {
    toast.success("Puzzle Skipped !!!");
    setTimeout(() => {
      setPuzzleSolved(true);
    }, 2000);
  };

  const nextHint = () => {
    setHintIndex((prev) => (prev + 1) % hints.length);
  };

  const prevHint = () => {
    setHintIndex((prev) => (prev - 1 + hints.length) % hints.length);
  };

  if (puzzleSolved) {
    return (
      <>
        <Navbar />
        <MyIntro />
        <Skills />
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[rgba(253,253,253,1)] p-6 flex flex-col items-center">
      <Toaster />
      {/* Puzzle Section */}
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
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
            onClick={skipPuzzle}
          >
            Skip
          </button>

          {/* Hint Popover */}
          <Popover>
            <PopoverTrigger className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-xl transition duration-300">
              Hint
            </PopoverTrigger>
            <PopoverContent className="w-72 p-4 rounded-xl shadow-xl bg-white flex flex-col items-center relative space-y-4">
              <p className="text-center text-sm md:text-base mt-2">
                {hints[hintIndex]}
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={prevHint}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                >
                  <ChevronLeft />
                </button>
                <span className="text-xs text-gray-500">
                  Hint {hintIndex + 1} of {hints.length}
                </span>
                <button
                  onClick={nextHint}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                >
                  <ChevronRight />
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Video with Popover on top */}
      <div className="relative">
        <video
          width={800}
          height={800}
          autoPlay
          loop
          muted
          onClick={() => setShowInputText(!showInputText)}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Hint Popover */}
        {showInputText && (
          <div className="absolute top-4 right-4 z-10  px-4 py-2 rounded-lg">
            <div className="items-center gap-4">
              <input
                id="width"
                placeholder="Class Name ?"
                className="border border-gray-300 rounded-md px-2 py-1"
                value={text}
                onChange={(e) => checkAnswerOfText(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
