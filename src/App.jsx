import { Route, Routes } from "react-router-dom";
import { Projects } from "./Pages/ProjectsSection/Projects";
import { NotFoundPage } from "./Pages/NotFoundPage";
import { Project } from "./Pages/ProjectsSection/components/Project";
import { AboutMe } from "./Pages/AboutMeSection/AboutMe";
import { HomePage } from "./Pages/HomePage/HomePage";
import { PuzzleIconButton } from "./Pages/Puzzle/components/PuzzleIconButton";
import { Puzzle } from "./Pages/Puzzle/Puzzle";

function App() {
  return (
    <>
      <PuzzleIconButton />
      <Routes>
        <Route path="/puzzle" element={<Puzzle />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<Project />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
