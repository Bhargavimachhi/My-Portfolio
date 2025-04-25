import { Github, Rocket } from "lucide-react";

export const ProjectLinks = ({ github, liveLink }) => {
  return (
    <>
      <div className="flex ml-10">
        {liveLink && (
          <div
            className="flex items-center border shadow-lg p-3 mr-10 cursor-pointer rounded-lg duration-500 hover:scale-110"
            onClick={() => {
              window.open(liveLink);
            }}
          >
            <Rocket size={40} className="text-red-500 mr-2" />
            Live Link
          </div>
        )}
        {github && (
          <div
            className="flex items-center border shadow-lg p-3 cursor-pointer rounded-lg duration-500 hover:scale-110"
            onClick={() => {
              window.open(github);
            }}
          >
            <Github size={40} className="mr-2" />
            GitHub
          </div>
        )}
      </div>
    </>
  );
};
