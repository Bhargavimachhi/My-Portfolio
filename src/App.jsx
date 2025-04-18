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
        <Route path="/puzzle" element={<Puzzle />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
