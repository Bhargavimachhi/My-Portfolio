import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export const ProjectPortals = ({ portals }) => {
  return (
    <>
      <div className="items-center">
        {portals.map((portal) => {
          return (
            <div key={portal.name} className="p-5">
              {portal.images && (
                <div className="border-1 shadow-xl rounded-2xl p-5">
                  {portal.name && (
                    <h1 className="w-full text-center text-3xl font-semibold p-5">
                      {portal.name}
                    </h1>
                  )}
                  <AnimatedTestimonials
                    key={portal.name}
                    className="m-5"
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
