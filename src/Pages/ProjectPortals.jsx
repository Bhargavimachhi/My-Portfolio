import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export const ProjectPortals = ({ portals }) => {
  return (
    <>
      <div className="items-center">
        {portals.map((portal) => {
          return (
            <div>
              {portal.images && (
                <div className="m-20 border-1 shadow-xl rounded-2xl">
                  {portal.name && (
                    <h1 className="w-full text-center text-3xl m-10 font-semibold">
                      {portal.name}
                    </h1>
                  )}
                  <AnimatedTestimonials
                    key={portal.name}
                    className="m-0"
                    testimonials={portal.images}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
