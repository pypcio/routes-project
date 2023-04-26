import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className="navbar">
          <h1>PracaSzukaRobala</h1>
          <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
          </div>
        </nav>
      </header>
      <main className="pages">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
