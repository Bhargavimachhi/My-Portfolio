import { AboutMeIntroPage } from "./AboutMeIntroPage";
import { Achievements } from "./Achievements";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/NavBar";

export const AboutMe = () => {
  return (
    <>
      <Navbar />
      <AboutMeIntroPage />
      <Achievements />
      <Footer />
    </>
  );
};
