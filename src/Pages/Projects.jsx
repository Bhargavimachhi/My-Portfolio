import { projects } from "../assets/data/projects";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/NavBar";

export const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {projects.map((project) => {
            return (
              <div className="flex flex-col items-center text-center sm:p-15">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto transition-transform transform duration-500 hover:scale-80 p-5"
                />
                {/* </div> */}
                <h2 className="text-2xl font-semibold mt-6">{project.name}</h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
