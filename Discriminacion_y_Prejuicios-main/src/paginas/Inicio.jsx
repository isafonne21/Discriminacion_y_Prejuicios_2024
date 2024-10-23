import React from "react";
import Menu from "../componentes/Menu";
import Portada from "../componentes/Portada";
import Pie_de_pagina from "../componentes/pie_de_pagina";


function Inicio() {
  return (
    <div className="Inicio">
      <Menu />
      <Portada />
      <Pie_de_pagina />
    </div>
  );
}

export default Inicio;
