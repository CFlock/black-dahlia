import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import textLogo from "./assets/text-logo.png";
import dahlia from "./assets/dahlia.png";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar px-8 py-4 relative border-b border-zinc-800">
        {/* Left */}
        <div>
          <Link to="/" className="btn btn-outline btn-secondary h-auto p-3">
            <img src={dahlia} alt="Black Dahlia" className="h-20 w-auto" />
          </Link>
        </div>

        {/* Center */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-3xl font-bold tracking-widest text-primary-content">Black Dahlia</h1>
        </div>

        {/* Right */}
        <div className="ml-auto flex gap-4">
          <Link className="btn btn-ghost btn-secondary btn-lg text-primary-content" to="/">
            Home
          </Link>

          <Link className="btn btn-ghost btn-secondary btn-lg text-primary-content" to="/about">
            Meet the Team
          </Link>
        </div>
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
