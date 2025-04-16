import { Footer } from "./components/Footer";
import { Navbar } from "./components/NavBar";
import { HomePage } from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { Projects } from "./Pages/Projects";
import { NotFoundPage } from "./components/NotFoundPage";
import { AboutMe } from "./Pages/AboutMe";
import { Temp } from "./Pages/temp";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/temp" element={<Temp />} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
