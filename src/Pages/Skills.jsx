
export const Skills = () => {
  const skills = [
    { name: "HTML", logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { name: "CSS", logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    {
      name: "JavaScript",
      logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    },
    { name: "Java", logo: "https://cdn.worldvectorlogo.com/logos/java-4.svg" },
    {
      name: "MongoDB",
      logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    },
    { name: "C", logo: "https://cdn.worldvectorlogo.com/logos/c-4.svg" },
    { name: "SQL", logo: "https://cdn.worldvectorlogo.com/logos/sql-2.svg" },
    {
      name: "LangChain",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/LangChain_Logo.png/512px-LangChain_Logo.png",
    },
    {
      name: "Express",
      logo: "https://cdn.worldvectorlogo.com/logos/express-3.svg",
    },
    {
      name: "React",
      logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      name: "AWS",
      logo: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-aws-logo.svg",
    },
    {
      name: "AI",
      logo: "https://cdn.worldvectorlogo.com/logos/artificial-intelligence-ai-logo.svg",
    },
    { name: "Git", logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    {
      name: "Data Science",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Data_Science_logo.svg",
    },
    {
      name: "DSA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Data_Structures_and_Algorithms_Logo.png",
    },
    {
      name: "Linux",
      logo: "https://cdn.worldvectorlogo.com/logos/linux-tux.svg",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-color-fefae0 p-8 ">
        <h1 className="text-4xl font-bold mb-8 text-center">My Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-5 justify-items-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center justify-center bg-white bg-opacity-10 rounded-full p-6 shadow-lg hover:bg-opacity-20 transition duration-300 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          ))}
        </div>
      </div>

    </>
  );
};
