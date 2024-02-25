import { FiltrosComponent } from '../Filtros/FiltrosComponent'
import { PublicacionesComponent } from '../Publicaciones/PublicacionesComponent'

export const InicioComponent = ({activeCheckboxes, setActiveCheckboxes, searchTerm}) => {

    return (
      <>
          <FiltrosComponent activeCheckboxes={activeCheckboxes} setActiveCheckboxes={setActiveCheckboxes} />
          <PublicacionesComponent activeCheckboxes={activeCheckboxes} searchTerm={searchTerm} />
      </>
  )
}
