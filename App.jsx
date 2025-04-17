import { HomePage } from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { Projects } from "./Pages/Projects";
import { NotFoundPage } from "./components/NotFoundPage";
import { AboutMe } from "./Pages/AboutMe";
import { Puzzle } from "./Pages/Puzzle";
import { PuzzleIconButton } from "./Pages/PuzzleIconButton";

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
