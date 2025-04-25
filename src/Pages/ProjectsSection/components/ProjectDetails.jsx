import {
  CircleCheckBig,
  CircleHelp,
  HeartHandshake,
  SplinePointer,
  UsersRound,
} from "lucide-react";

export const ProjectDetails = ({ project }) => {
  return (
    <>
      <div className="md:flex  justify-start w-full gap-10">
        <Info
          name="Tools"
          informations={project.tools}
          logo={<SplinePointer size={20} className="mr-5 text-yellow-400" />}
        />
        <Info
          name="Team"
          informations={project.team}
          logo={<UsersRound size={20} className="mr-5 text-blue-500" />}
        />
      </div>
      <div className="w-full">
        <Info
          name="Problem"
          informations={project.problem}
          logo={<CircleHelp size={20} className="mr-5 text-red-500" />}
        />
      </div>
      <div className="w-full">
        <Info
          name="Solution"
          informations={project.solution}
          logo={<CircleCheckBig size={20} className="mr-5 text-green-500" />}
        />
      </div>
      <div className="w-full">
        <Info
          name="Features"
          informations={project.features}
          logo={<HeartHandshake size={25} className="mr-5 text-pink-400" />}
        />
      </div>
    </>
  );
};

const Info = ({ name, informations, logo }) => {
  return (
    <>
      {informations && (
        <div className="m-20">
          <div className="flex items-center">
            {logo}
            <h1 className="text-2xl font-semibold">{name}</h1>
          </div>
          {typeof informations == "string" && (
            <p key={0} className="text-xl m-1">
              {informations}
            </p>
          )}
          {typeof informations != "string" &&
            informations.map((info, index) => (
              <p key={index} className="text-xl m-1">
                {info}
              </p>
            ))}
        </div>
      )}
    </>
  );
};
