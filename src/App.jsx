import { useState } from "react"
import { NavComponent } from "./Components/Nav/NavComponent"
import { InicioPage } from "./Pages/Inicio/InicioPage";
import { PublicarPage } from "./Pages/Publicar/PublicarPage";
import { PreviewPage } from "./Pages/PublicacionPreview/PreviewPage";
import { PerfilPage } from "./Pages/Perfil/PerfilPage";
import { CarritoPage } from "./Pages/Carrito/CarritoPage";
import { Dashboardpage } from "./Pages/Dashboard/Dashboardpage";

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
        // Accesos directos del nav
        page === 'inicio' && <InicioPage activeCheckboxes={activeCheckboxes} setActiveCheckboxes={setActiveCheckboxes} searchTerm={searchTerm} changePage={changePage} getImgId={getImgId}/>
        || page === 'carrito' && <CarritoPage/>
        || page ===  'publicar' && <PublicarPage changePage={changePage}/>
        // Vista de la publicacion
        || page === 'preview' && <PreviewPage id={idPublicacion} changePage={changePage}/>
        //Opciones del dropwdown del perfil
        || page === 'perfil' && <PerfilPage/>
        || page === 'dashboard' && <Dashboardpage changePage={changePage}/>
      }

      {/* <p className="text-white">Esto es una prueba</p> */}
    </>
  );
}
