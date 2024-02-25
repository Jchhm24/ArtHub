import { useState } from "react"
import { NavComponent } from "./Components/Nav/NavComponent"
import { InicioComponent } from "./Components/Inicio/InicioComponent";

export const App = () => {
  const [activeCheckboxes, setActiveCheckboxes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <NavComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <InicioComponent activeCheckboxes={activeCheckboxes} setActiveCheckboxes={setActiveCheckboxes} searchTerm={searchTerm} />
    </>
  );
}
