import { Footer } from "./components/Footer";
import { Navbar } from "./components/NavBar";
import { HomePage } from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
