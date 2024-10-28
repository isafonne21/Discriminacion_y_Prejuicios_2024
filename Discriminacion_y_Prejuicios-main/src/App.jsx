import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Log from "./paginas/Login";
import Inicio_sesion from "./paginas/inicio_sesion";
import Registro from './paginas/registro';
import Profile from "./paginas/Profile";
import Contactanos from "./paginas/Contactanos";
import QS from "./paginas/qs";
import Cursos from "./paginas/cursos";
import Blog from "./paginas/blog";
import Metodología from "./paginas/metodologia";
import Relacionate from "./paginas/relacionate";

export default function App() {
  return (
    <Router>
      <Routes>
        
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/login" element={<Log />} />
        <Route exact path="/inicio_sesion" element={<Inicio_sesion />} />
        <Route exact path="/registro" element={<Registro />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/profile_l" element={<Contactanos />} />
        <Route exact path="/qs" element={<QS />} />
        <Route exact path="/cursos" element={<Cursos />} />
        <Route exact path="/Blog" element= {<Blog />} />
        <Route exact path="/metodologia" element={<Metodología />} />
        <Route exact path="/relacionate" element={<Relacionate />} />
        
      </Routes>
    </Router>
  );
}