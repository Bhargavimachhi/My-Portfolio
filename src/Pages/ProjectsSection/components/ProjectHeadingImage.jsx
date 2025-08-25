import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export const ProjectHeadingImage = ({
  description,
  title,
  imageSrc,
  github = null,
  liveLink = null,
}) => {

  const handleNavigation = () => {
    if (liveLink) {
      window.open(liveLink) ;
    } else if (github) {
      window.open(github);
    }
  };
  return (
    <>
      <div className="flex flex-col overflow-hidden">
        {imageSrc && (
          <div onClick={handleNavigation}>
            <ContainerScroll
              titleComponent={
                <>
                  <h1 className="text-4xl text-black dark:text-white max-sm:mt-30">
                    {description} <br />
                    <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                      {title}
                    </span>
                  </h1>
                </>
              }
            >
              <img
                src={imageSrc}
                alt="hero"
                height={720}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full object-left-top cursor-pointer p-0"
                draggable={false}
              />
            </ContainerScroll>
          </div>
        )}
      </div>
    </>
  );
};
