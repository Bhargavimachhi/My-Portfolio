import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { DraggablePuzzleHeading } from "./DraggablePuzzleHeading";
import video from "../assets/Videos/video.mp4";
import { Bone } from "lucide-react";
import { ExplodingBone } from "./ExplodingBone";

export const Puzzle = () => {
  const navigate = useNavigate();
  const [showInputText, setShowInputText] = useState(false);
  const [text, setText] = useState("");

  const boneFound = () => {
    toast.success("Hurray !!! You Found the Bone, now doggy can sleep");
    setTimeout(() => {
      markPuzzleAsSolved();
    }, 3000);
  };

  const checkAnswerOfText = (curr) => {
    setText(curr);
    if (curr === "hidden" || curr === "invisible" || curr === "opacity-0") {
      toast.success(
        `Hurray !!! ${curr} class name Makes the Division Invisible in Tailwind CSS`
      );
      setTimeout(() => {
        markPuzzleAsSolved();
      }, 3000);
    }
  };

  const markPuzzleAsSolved = () => {
    localStorage.setItem("puzzle", JSON.stringify({ puzzleSolved: true }));
    navigate("/");
  };

  return (
    <div className="relative w-full bg-[rgba(253,253,253,1)] p-6 flex flex-col items-center overflow-hidden">
      <Toaster />
      <div className="relative w-fit h-fit ">
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer mt-4"
          onClick={boneFound}
        >
          <Bone
            size={40}
            className="text-gray-100 hover:scale-110 transition-transform duration-200 hover:text-gray-300"
          />
        </div>

        {/* Heading - draggable, initially over the bone */}
        <div className="relative z-30">
          <DraggablePuzzleHeading />
        </div>
      </div>
      <div>
        <ExplodingBone />
      </div>

      {/* Video - behind everything */}
      <div className="relative z-10 mt-10">
        <div>
          <ExplodingBone />
        </div>
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

        <div>
          <ExplodingBone />
        </div>

        {/* Hint Popover */}
        {showInputText && (
          <div className="absolute top-4 right-4 z-20 px-4 py-2 rounded-lg">
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
