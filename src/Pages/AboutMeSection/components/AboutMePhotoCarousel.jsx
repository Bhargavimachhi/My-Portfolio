import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { photos } from "../../../assets/data/photoGalleryAboutMe";
export const AboutMePhotoCarousel = () => {
  const cards = photos.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <>
      <div className="w-full h-full py-20">
        <Carousel items={cards} />
      </div>
    </>
  );
};
