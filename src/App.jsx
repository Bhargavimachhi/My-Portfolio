import { HomePage } from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { Projects } from "./Pages/Projects";
import { NotFoundPage } from "./components/NotFoundPage";
import { AboutMe } from "./Pages/AboutMe";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
