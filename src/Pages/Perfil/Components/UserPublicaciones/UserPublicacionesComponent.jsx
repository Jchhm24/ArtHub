import { usePublicacionesUser } from "./Hooks/usePublicacionesUser"

export const UserPublicacionesComponent = ({changePage, getImgId, setStatePage}) => {

    const publicacion =usePublicacionesUser ()

    const viewImg = (id) =>{
        getImgId(id)
        // Actualizamos el setStatePage a 2 para que nos regrese a la pagina de editar perfil cuando salimos de ver la publicacion
        setStatePage(2)
        changePage('preview')
    }
    return (
      <div className="flex flex-col items-center w-max max-md:w-full gap-[30px]">
          <h1 className="py-2.5 border-b-4 border-vulcan-900 w-full max-md:border-t-4
              font-Red-Hat-Display text-yellow-orange-300 text-center text-2xl">
              Tus publicaciones 
          </h1>

          <div className="flex flex-col justify-center items-center my-2.5">
              <div className="columns-4 max-md:columns-3 max-[300px]:columns-2 ">
                {publicacion.map(x => 
                    <img key={x.idPublicacion} src={x.archivo} id={x.idPublicacion} alt={x.titulo} className="card-imagen-publicacion"
                        onClick={() => viewImg(x.idPublicacion)}/>
                    
                )}
              </div>
          </div>
      </div>
    )
}
