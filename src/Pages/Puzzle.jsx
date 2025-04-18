import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { DraggablePuzzleHeading } from "./DraggablePuzzleHeading";
import {
  Bone,
  Clapperboard,
  Crown,
  Gift,
  Ham,
  Home,
  LetterText,
  Utensils,
  Volleyball,
} from "lucide-react";
import { ExplodingBone } from "./ExplodingBone";
import { dogVideos } from "../assets/data/dogVideos";

import { FloatingDock } from "@/components/ui/floating-dock";

export const Puzzle = () => {
  const navigate = useNavigate();
  const [showInputText, setShowInputText] = useState(false);
  const [text, setText] = useState("");
  const [video, setVideo] = useState(dogVideos["dogBarking"]);
  const [videoReady, setVideoReady] = useState(true);
  const videoRef = useRef(null);
  const [wrongBoneText, setWrongBoneText] = useState([
    "You got the wrong one again 😜",
    "Uhh Ahh Neither This One 🤷‍♀️",
    "Not This Bone Dear 🚫",
  ]);

  const boneFound = () => {
    changeVideo(dogVideos["dogWithBone"]);
    toast.success("Hurray !!! You Found the Bone, now doggy can focus on bone");
    setTimeout(() => {
      markPuzzleAsSolved();
    }, 3000);
  };

  const wrongBoneFound = () => {
    let curr = wrongBoneText;
    toast.error(curr.pop());
    setWrongBoneText(curr);
  };

  const checkAnswerOfText = (curr) => {
    setText(curr);
    if (curr === "hidden" || curr === "invisible" || curr === "opacity-0") {
      setShowInputText(false);
      const dogVideo = document.getElementById("dog-video-container");
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
    navigate("/My-Portfolio");
  };

  const changeVideo = (newVideo) => {
    setVideoReady(false);
    setTimeout(() => {
      setVideo(newVideo);
      if (videoRef.current) {
        videoRef.src = newVideo;
        videoRef.current.play();
      }
    }, 500);
  };

  const dogActionButtons = [
    {
      title: "Lunch Time",
      icon: (
        <Ham
          size={50}
          className="text-rose-400 cursor-pointer"
          onClick={() => changeVideo(dogVideos["dogEating"])}
        />
      ),
    },
    {
      title: "Let's Play",
      icon: (
        <Volleyball
          size={50}
          className="text-blue-500 cursor-pointer"
          onClick={() => changeVideo(dogVideos["dogWithBall"])}
        />
      ),
    },
    {
      title: "I have a Gift",
      icon: (
        <Gift
          size={50}
          className="text-red-500 cursor-pointer"
          onClick={() => changeVideo(dogVideos["dogWithBalloons"])}
        />
      ),
    },
    {
      title: "Let's get Ready",
      icon: (
        <Clapperboard
          size={50}
          className="text-gray-500 cursor-pointer"
          onClick={() => changeVideo(dogVideos["dogWithMirror"])}
        />
      ),
    },
    {
      title: "Hungry",
      icon: (
        <Utensils
          size={50}
          className="text-violet-500 cursor-pointer"
          onClick={() => changeVideo(dogVideos["dogWantsFood"])}
        />
      ),
    },
    {
      title: "Home Sweet Home",
      icon: (
        <Home
          size={50}
          className="text-orange-500 cursor-pointer"
          onClick={() => changeVideo(dogVideos["dogWithHome"])}
        />
      ),
    },
    {
      title: "Let's Dance",
      icon: (
        <Crown
          size={50}
          className="text-yellow-500 cursor-pointer"
          onClick={() => changeVideo(dogVideos["dogJumping"])}
        />
      ),
    },
  ];

  const exploadingBones = [
    {
      className: "absolute left-1/3 top-1/2",
    },
    {
      className: "absolute left-2/3 top-2/3",
    },
    {
      className: "absolute left-1/2 mt-300 pb-100",
    },
  ];

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
            className="opacity-70 text-gray-100 hover:scale-110 transition-transform duration-200 hover:text-gray-500"
          />
        </div>

        <div className="relative z-30 top-0">
          <DraggablePuzzleHeading />
        </div>
      </div>

      {exploadingBones.map((bone) => {
        return (
          <div onClick={wrongBoneFound} className={bone.className}>
            <ExplodingBone />
          </div>
        );
      })}

      <div className="relative z-10">
        <div className="flex items-center" id="dog-video-container">
          <video
            ref={videoRef}
            width={800}
            height={800}
            autoPlay
            loop={video === dogVideos["dogSitting"]}
            muted
            id="dog-video"
            onClick={() => setShowInputText(!showInputText)}
            onCanPlay={() => setVideoReady(true)} // this triggers when video is ready to play
            className={`relative transition-opacity duration-500 ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
            src={video}
            onEnded={() => changeVideo(dogVideos["dogBarking"])}
          ></video>
          <FloatingDock
            items={[
              {
                title: "Use Translator",
                icon: (
                  <LetterText
                    size={50}
                    className="text-yellow-500 cursor-pointer"
                    onClick={() =>
                      changeVideo(dogVideos["dogBarkingInEnglish"])
                    }
                  />
                ),
              },
            ]}
          />
        </div>

        <div className="absolute flex flex-wrap items-center justify-center w-full mt-0">
          <FloatingDock
            mobileClassName="translate-y-40 h-50"
            items={dogActionButtons}
          />
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
