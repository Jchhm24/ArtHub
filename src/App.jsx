import { useState } from "react"
import { FiltrosComponent } from "./Components/Filtros/FiltrosComponent"
import { NavComponent } from "./Components/Nav/NavComponent"
import { PublicacionesComponent } from "./Components/Publicaciones/PublicacionesComponent"

export const App = () => {
  const [activeCheckboxes, setActiveCheckboxes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <NavComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FiltrosComponent activeCheckboxes={activeCheckboxes} setActiveCheckboxes={setActiveCheckboxes} />
      <PublicacionesComponent activeCheckboxes={activeCheckboxes} searchTerm={searchTerm} />
    </>
  );
}
