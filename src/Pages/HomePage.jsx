import { useEffect } from "react";
import { Navbar } from "../components/NavBar";
import { MyIntro } from "./MyIntro";
import { Skills } from "./Skills";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";

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
      <MyIntro />
      <Skills />
      <Footer />
    </>
  );
};
