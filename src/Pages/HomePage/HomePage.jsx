import { useEffect } from "react";
import { Navbar } from "../Navbar";
import { Skills } from "./components/Skills";
import { Footer } from "../Footer";
import { useNavigate } from "react-router-dom";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FeedbackForm } from "./components/FeedBackForm";
import { MyIntro } from "./components/MyIntro";

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
      <BackgroundBeamsWithCollision>
        <FeedbackForm />
      </BackgroundBeamsWithCollision>
      <Footer />
    </>
  );
};
