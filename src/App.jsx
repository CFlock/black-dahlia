import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar bg-base-200">
        <Link className="btn btn-ghost" to="/">
          Home
        </Link>

        <Link className="btn btn-ghost" to="/about">
          About
        </Link>
      </div>

      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;