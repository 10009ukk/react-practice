import { Route, Routes } from "react-router-dom";
import { About } from "./router/About";
import { Home } from "./router/Home";
import { NavBar } from "./router/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
