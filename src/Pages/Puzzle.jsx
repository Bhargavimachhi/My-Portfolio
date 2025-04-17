import { useEffect, useState } from "react";
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
  const wrongBoneText = [
    "You got the wrong one again 😜",
    "Uhh Ahh Neither This One 🤷‍♀️",
    "Not This Bone Dear 🚫",
  ];

  const boneFound = () => {
    toast.success("Hurray !!! You Found the Bone, now doggy can sleep");
    setTimeout(() => {
      markPuzzleAsSolved();
    }, 3000);
  };

  const wrongBoneFound = () => {
    toast.error(wrongBoneText[wrongBoneText.length - 1]);
    wrongBoneText.pop();
  };

  const checkAnswerOfText = (curr) => {
    setText(curr);
    if (curr === "hidden" || curr === "invisible" || curr === "opacity-0") {
      const dogVideo = document.getElementById("dog-video");
      dogVideo.classList.add(curr);
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

  useEffect(() => {
    const dogVideo = document.getElementById("dog-video");
    dogVideo.playBackRate = 0.5;
  }, []);

  return (
    <div className="relative w-full bg-[rgba(253,253,253,1)] p-6 flex flex-col items-center">
      <Toaster />
      <div className="relative w-fit h-fit ">
        <div
          className="hover:cursor-pointer relative left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 mt-2 w-fit h-fit"
          onClick={boneFound}
        >
          <Bone
            size={40}
            className="text-gray-50 hover:scale-110 transition-transform duration-200 hover:text-gray-300"
          />
        </div>

        {/* Heading - draggable, initially over the bone */}
        <div className="relative z-30 top-0">
          <DraggablePuzzleHeading />
        </div>
      </div>

      <div onClick={wrongBoneFound} className="absolute left-1/3 top-1/2">
        <ExplodingBone />
      </div>
      <div onClick={wrongBoneFound} className="absolute left-2/3 top-1/3">
        <ExplodingBone />
      </div>
      <div onClick={wrongBoneFound} className="absolute left-1/2 mt-300 pb-100">
        <ExplodingBone />
      </div>

      {/* Video - behind everything */}
      <div className="relative z-10 mt-10">
        <video
          width={800}
          height={800}
          autoPlay
          loop
          muted
          onClick={() => setShowInputText(!showInputText)}
          id="dog-video"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

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
