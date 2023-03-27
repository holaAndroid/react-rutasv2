import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Usuarios from "./pages/Usuarios";
import Contacto from "./pages/Contacto";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usuarios" element={<usuarios />} />
            <Route path="/usuario" element={<Navigate to={"/usuarios"} />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/notfound" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
