import { Card } from "@mui/material";
import { skills } from "../assets/data/skills";

export const Skills = () => {

  return (
    <>
      <div className="min-h-screen p-8 ">
        <h1 className="text-4xl font-bold mb-8 text-center">My Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 justify-items-center">
          {skills.map((skill) => (
            <>
              <div
                key={skill.name}
                className="transition-transform duration-300 border-1 shadow-lg hover:scale-110 hover:shadow-2xl shadow-black/20 bg-white rounded-2xl p-4 flex flex-col items-center justify-center w-40 h-52 mb-6 cursor-pointer"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-20 h-20 object-contain mb-4"
                />
                <label className="text-center text-sm font-semibold text-gray-700">
                  {skill.name}
                </label>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
