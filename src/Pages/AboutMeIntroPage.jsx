import image from "../assets/Images/profilephoto.png";

export const AboutMeIntroPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl p-10">
          {/* Image */}
          <div className="md:w-1/2 flex justify-center md:mb-0">
            <img
              src={image}
              alt="image"
              className="w-64 md:w-80 rounded-full shadow-lg"
            />
          </div>
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              Hey,this is Bhargavi
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
              💡 This curiosity and enthusiasm naturally led me to pursue a
              future in the field of computer engineering. In 2022, I began my
              journey in higher education with a Bachelor's degree in Computer
              Engineering.
            </h2>

            <h2 className="text-lg font-light mb-3">
              ♟️🏋️‍♀️ When i am not coding you will find me playing chess or
              exercising
            </h2>

            <h2 className="text-lg font-light mb-3">
              📖 I also love reading books <br />
              PS : Atomic Habits is my personal favourite book
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
