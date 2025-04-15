import { achievements } from "../assets/data/achievements";

export const Achievements = () => {
  return (
    <>
      <div className="items-center">
        <h1 className="text-4xl md:text-5xl font-light mb-6 text-center mt-10 mb-30">
          My Achievements
        </h1>
        <div className="mx-auto max-w-7xl px-4">
          {achievements.map((achievement, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col sm:flex-row items-center gap-4 my-12 mb-30 ${
                  isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="flex-[0.6] text-center sm:text-left">
                  {achievement.description.map((description, i) => (
                    <p
                      key={i}
                      className={`text-base sm:text-lg md:text-xl font-medium p-1 ${
                        isEven ? "text-right" : ""
                      }`}
                    >
                      {description}
                    </p>
                  ))}
                </div>
                <div className="flex justify-center flex-[0.4]">
                  <img
                    src={achievement.image}
                    alt="achievement"
                    className="h-40 w-40 rounded-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
