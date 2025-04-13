import image1 from "../assets/Images/project1.png";
import image2 from "../assets/Images/project1.png";
export const Projects = () => {
  const projects = [
    {
      name: "School Management System",
      image: image1,
      description: "A website to manage school work virtually",
    },
    {
      name: "School Management System",
      image: image2,
      description:
        "A website for student,teacher and principal to manage school work virtually",
    },
    {
      name: "School Management System",
      image: image1,
      description:
        "A website for student,teacher and principal to manage school work virtually",
    },
    {
      name: "School Management System",
      image: image2,
      description:
        "A website for student,teacher and principal to manage school work virtually",
    },
  ];
  return (
    <>
      <div className="min-h-screen bg-white p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => {
            return (
              <div className="flex flex-col items-center text-center p-15">
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
    </>
  );
};
