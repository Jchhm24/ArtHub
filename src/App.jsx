import { useState } from "react"
import { NavComponent } from "./Components/Nav/NavComponent"
import { InicioPage } from "./Pages/Inicio/InicioPage";
import { PublicarPage } from "./Pages/Publicar/PublicarPage";
import { PreviewPage } from "./Pages/PublicacionPreview/PreviewPage";

export const App = () => {
  const [activeCheckboxes, setActiveCheckboxes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Para poder cambiar de componente de page
  const [page, setPage] = useState('inicio')

  const changePage = (newPage) => {
      setPage(newPage)
  }

  // para pasar la id de la publicacion a la pagina de preview
  const [idPublicacion, setIdPublicacion] = useState(0)

  const getImgId = (id) => {
    setIdPublicacion(id)
  }

  return (
    <>
      <NavComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} changePage={changePage}/>
 
      {
        page === 'inicio' && <InicioPage activeCheckboxes={activeCheckboxes} setActiveCheckboxes={setActiveCheckboxes} searchTerm={searchTerm} changePage={changePage} getImgId={getImgId}/>
        || page ===  'publicar' && <PublicarPage changePage={changePage}/>
        || page === 'preview' && <PreviewPage id={idPublicacion} changePage={changePage}/>
      }


      {/* <p className="text-white">Esto es una prueba</p> */}
    </>
  );
}
