import { AboutMeIntroPage } from "./AboutMeIntroPage";
import { Achievements } from "./Achievements";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export const AboutMe = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const puzzleData = JSON.parse(localStorage.getItem("puzzle"));
    if (!puzzleData?.puzzleSolved) {
      navigate("/puzzle");
    }
    setLoading(false);
  }, [navigate]);

  if (loading) {
    return <></>;
  }
  return (
    <>
      <Navbar />
      <BackgroundBeamsWithCollision >
        <AboutMeIntroPage />
      </BackgroundBeamsWithCollision>
      <BackgroundBeamsWithCollision >
        <Achievements />
      </BackgroundBeamsWithCollision>
      <Footer />
    </>
  );
};
