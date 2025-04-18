import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { MyIntro } from "./MyIntro";
import { Skills } from "./Skills";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const puzzleData = JSON.parse(localStorage.getItem("puzzle"));
    if (!puzzleData?.puzzleSolved) {
      navigate("/puzzle");
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      <BackgroundBeamsWithCollision>
        <MyIntro />
      </BackgroundBeamsWithCollision>
      <BackgroundBeamsWithCollision>
        <Skills />
      </BackgroundBeamsWithCollision>

      <Footer />
    </>
  );
};
