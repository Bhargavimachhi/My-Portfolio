import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { DraggablePuzzleHeading } from "./components/DraggablePuzzleHeading";
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
import { ExplodingBone } from "./components/ExplodingBone";
import { dogVideos } from "../../assets/data/dogVideos";

import { FloatingDock } from "@/components/ui/floating-dock";

export const Puzzle = () => {
  const navigate = useNavigate();
  const [showInputText, setShowInputText] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
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
    } else if (curr === "kill" || curr === "gun") {
      setShowInputText(false);
      const dogVideo = document.getElementById("dog-component");
      dogVideo.classList.add("hidden");
      toast.error("You Killed The Dog !!! Peta is Looking for you");
    }
  };

  const markPuzzleAsSolved = () => {
    localStorage.setItem("puzzle", JSON.stringify({ puzzleSolved: true }));
    navigate("/");
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
      title: "Use Translator",
      icon: (
        <LetterText
          size={50}
          className="text-yellow-500 cursor-pointer"
          onClick={() => changeVideo(dogVideos["dogBarkingInEnglish"])}
        />
      ),
    },
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
      className: "z-30 absolute left-1/3 top-1/2",
    },
    {
      className: "z-30 absolute left-2/3 top-2/3",
    },
    {
      className: "z-30 absolute left-1/2 mt-300 pb-100",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
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
            className="opacity-90 text-gray-200 hover:scale-110 transition-transform duration-200 hover:text-gray-500"
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

      <div className="relative z-10" id="dog-component">
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
        </div>

        <div className="absolute flex flex-col items-center justify-center w-full mt-0">
          <div className="w-fit bg-gray-50 rounded-xl sm:flex">
            <FloatingDock
              mobileClassName="translate-y-40 h-50"
              items={dogActionButtons.slice(0, 4)}
            />
            <FloatingDock
              mobileClassName="ml-0 translate-y-40 h-50 pr-3"
              items={dogActionButtons.slice(4)}
            />
          </div>
        </div>

        {/* Hint Popover */}
        {showInputText && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 w-full sm:w-auto">
            <div className="flex items-center justify-center gap-2 sm:gap-4">
              <input
                id="width"
                placeholder="Enter className"
                className="border border-gray-300 rounded-md px-2 py-1 h-10 w-full sm:w-96 md:w-[28rem] lg:w-[500px]"
                value={text}
                onChange={(e) => checkAnswerOfText(e.target.value)}
              />
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-gray-100 transition"
                title="Click for hint"
              >
                i
              </button>
            </div>

            {showInfo && (
              <div className="mt-2 text-sm text-gray-700 bg-gray-100 p-2 rounded-md max-w-[90%] sm:max-w-[400px] mx-auto">
                💡 Try using a Tailwind utility class that hides the element
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
