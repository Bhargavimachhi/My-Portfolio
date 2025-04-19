export const ProjectDetails = ({ project }) => {
  return (
    <>
      <div className="md:flex  justify-start w-full mt-20">
        {project?.tools && (
          <div className="ml-20">
            <h1 className="text-2xl font-semibold">Tools</h1>
            {project.tools.map((tool) => {
              return <p className="text-xl m-1">{tool}</p>;
            })}
          </div>
        )}
        {project?.team && (
          <div className="ml-20">
            <h1 className="text-2xl font-semibold">Team</h1>
            {project.team.map((member) => {
              return <p className="text-xl m-1">{member}</p>;
            })}
          </div>
        )}
      </div>
      <div className="w-full">
        {project?.problem && (
          <div className="m-20">
            <h1 className="text-2xl font-semibold">Problem</h1>
            <p className="text-xl">{project.problem}</p>
          </div>
        )}
      </div>
      <div className="w-full">
        {project?.solution && (
          <div className="m-20">
            <h1 className="text-2xl font-semibold">Solution</h1>
            <p className="text-xl">{project.solution}</p>
          </div>
        )}
      </div>
      <div className="w-full">
        {project?.features && (
          <div className="m-20">
            <h1 className="text-2xl font-semibold">Features</h1>
            {project.features.map((feature) => {
              return <p className="text-xl m-1">{feature}</p>;
            })}
          </div>
        )}
      </div>
    </>
  );
};
