import { useNavigate } from "react-router-dom";
import { projects } from "../../assets/data/projects";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { useEffect } from "react";
import { FaHeart } from "react-icons/fa";

export const Projects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const puzzleData = JSON.parse(localStorage.getItem("puzzle"));
    if (!puzzleData?.puzzleSolved) {
      navigate("/puzzle");
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {projects.map((project) => {
            return (
              <div className="flex flex-col items-center text-center sm:p-15 ">
                <img
                  src={project.image}
                  alt={project.name}
                  onClick={() => window.open(project.github)}
                  className="w-full h-auto transition-transform transform duration-500 hover:scale-80 p-5 cursor-pointer"
                />
                {/* </div> */}
                <h2 className="text-2xl font-bold mt-6">{project.name}</h2>
                <p
                  className={` mt-2 font-semibold ${
                    project.id === "simon-says"
                      ? "text-red-500 flex items-center"
                      : "text-gray-600"
                  }`}
                >
                  {project.description}
                  {project.id === "simon-says" && (
                    <FaHeart size={15} className="ml-2" />
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
