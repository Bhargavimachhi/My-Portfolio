import { image } from "@/assets/data/aboutMeProfileImage";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export const AboutMeIntroPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl py-12 gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              <div>
                Hey, This is{"  "}
                <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(17,_17,_70,_0.14))]">
                  <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-violet-500 via-blue-500 to-emerald-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                    <span className=""> Bhargavi</span>
                  </div>
                  <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-violet-500 via-blue-500 to-emerald-500 py-4">
                    <span className=""> Bhargavi</span>
                  </div>
                </div>
              </div>
            </h1>
            <h2 className="text-lg font-light mb-3">
              😊 I am borned and raised in India.
            </h2>

            <h2 className="text-lg font-light mb-3">
              ✨ From a young age, I've always been fascinated by technology. I
              especially enjoyed learning about technologies during my school
              days, which sparked a deep interest in how things work behind the
              scenes.
            </h2>

            <h2 className="text-lg font-light mb-3">
              💡 This curiosity and enthusiasm naturally led me to pursue my
              journey in higher education with a Bachelor's degree in Computer
              Engineering.
            </h2>

            <h1 className="text-2xl md:text-3xl font-light mb-3 mt-6">
              Fun Fact About Me
            </h1>

            <h2 className="text-lg font-light mb-3">
              ♟️🏋️‍♀️ When i am not coding you will find me playing chess or
              exercising
            </h2>

            <h2 className="text-lg font-light mb-3">
              📖 I also love reading books <br />
              PS : Atomic Habits is my personal favourite book
            </h2>
          </div>
          {/* Image */}
          <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
            <img
              src={image}
              alt="Bhargavi"
              className="w-64 sm:w-70 md:w-80 p-[0.5] rounded-[22px]"
            />
          </BackgroundGradient>
        </div>
      </div>
    </>
  );
};
