import { useState } from "react"
import { CheckboxContext } from "./Components/Filtros/CheckboxContext"
import { FiltrosComponent } from "./Components/Filtros/FiltrosComponent"
import { NavComponent } from "./Components/Nav/NavComponent"
import { PublicacionesComponent } from "./Components/Publicaciones/PublicacionesComponent"

export const App = () => {

  const [activeCheckboxes, setActiveCheckboxes] = useState([]);

    return (
      <>
        <NavComponent/>
        <CheckboxContext.Provider value={{activeCheckboxes, setActiveCheckboxes}}>
          <FiltrosComponent/>
          <PublicacionesComponent/>
        </CheckboxContext.Provider>
      </>
    )
}
