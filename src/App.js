import { Route, Routes } from "react-router-dom";
import { About } from "./router/About";
import { Home } from "./router/Home";
import { NavBar } from "./router/NavBar";
import { Nesting, New, Normal } from "./router/Nesting";
import { NoMatch } from "./router/NoMatch";
import { Summary } from "./router/Summary";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="summary" element={<Summary />} />
        <Route path="nesting" element={<Nesting/>}>
          <Route path="normal" element={<Normal/>} />
          <Route path="new" element={<New/>} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
