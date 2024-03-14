import { FiltrosComponent } from "../../Components/Filtros/FiltrosComponent"
import { PublicacionesComponent } from "../../Components/Publicaciones/PublicacionesComponent"


export const InicioPage = ({activeCheckboxes, setActiveCheckboxes, searchTerm, changePage, getImgId}) => {

    return (
      <>
          <FiltrosComponent activeCheckboxes={activeCheckboxes} setActiveCheckboxes={setActiveCheckboxes} />
          <PublicacionesComponent activeCheckboxes={activeCheckboxes} searchTerm={searchTerm} changePage={changePage} getImgId={getImgId}/>
      </>
    )
}
