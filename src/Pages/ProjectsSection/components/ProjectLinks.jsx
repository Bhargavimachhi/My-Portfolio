import { Github, Rocket } from "lucide-react";

export const ProjectLinks = (github , liveLink) => {
  return (
    <>
      <div className="flex ml-20">
        {liveLink && (
          <div
            className="flex items-center border shadow-lg p-3 mr-10 cursor-pointer"
            onClick={() => {window.open(liveLink)}}
          >
            <Rocket size={40} className="text-red-500" />
            Live Link
          </div>
        )}
        {github && (
          <div className="flex items-center border shadow-lg p-3 cursor-pointer" onClick={() => {window.open(github)}}>
            <Github size={40} />
            GitHub
          </div>
        )}
      </div>
    </>
  );
};
