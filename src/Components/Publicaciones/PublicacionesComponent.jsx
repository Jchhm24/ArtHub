import { useImagenes } from "./hooks/useImagenes"

export const PublicacionesComponent = () => {

    const imagenes = useImagenes()

    return (
        <div className="flex flex-col justify-center items-center mt-[10px]">
            <div className="columns-5 max-md:columns-3 max-[300px]:columns-2 " id="publicaciones_container">
                {imagenes.map(x => <img key={x.idPublicaciones} src={x.archivo} alt={x.titulo} value={x.idPublicaciones} className="card-imagen-publicacion"/>)}
            </div>
            <div className="flex flex-row">
                <svg className="animate-spin fill-white-400" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/>
                </svg>
                <p className="font-Red-Hat-Display font-medium text-white-400">Cargando...</p>
            </div>
        </div>
    )
}