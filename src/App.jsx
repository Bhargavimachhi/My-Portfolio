import { HomePage } from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { Projects } from "./Pages/Projects";
import { AboutMe } from "./Pages/AboutMe";
import { Puzzle } from "./Pages/Puzzle";
import { PuzzleIconButton } from "./Pages/PuzzleIconButton";
import { NotFoundPage } from "./Pages/NotFoundPage";

function App() {
  return (
    <>
    <PuzzleIconButton />
      <Routes>
        <Route path="/My-Portfolio/puzzle" element={<Puzzle />} />
        <Route path="/My-Portfolio" element={<HomePage />} />
        <Route path="/My-Portfolio/about-me" element={<AboutMe />} />
        <Route path="/My-Portfolio/projects" element={<Projects />} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
