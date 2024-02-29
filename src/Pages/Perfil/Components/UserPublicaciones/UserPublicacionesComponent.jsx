import { usePublicaciones } from "./Hooks/usePublicaciones"

export const UserPublicacionesComponent = () => {

    const publicacion = usePublicaciones()

    const userId = JSON.parse(localStorage.getItem('userData'))
    return (
      <div className="flex flex-col items-center">
          <p className="py-[10px] border-y-[6px] border-vulcan-900 w-full 
              font-Red-Hat-Display text-yellow-orange-300 text-center text-2xl">
              Tus publicaciones 
          </p>

          <div className="flex flex-col justify-center items-center my-2.5">
              <div className="columns-5 max-md:columns-3 max-[300px]:columns-2 ">
                {publicacion.map(x => 
                    userId.idUsuario === x.idArtista &&
                    <img key={x.idPublicacion} src={x.archivo} id={x.idPublicacion} alt={x.titulo} className="card-imagen-publicacion"/>
                )}
              </div>
          </div>

      </div>
    )
}
