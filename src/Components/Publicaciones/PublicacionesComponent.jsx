// import { Carousel } from "../Carousel/Carousel"
import { useState } from "react"
import { useImagenes } from "./hooks/useImagenes"

export const PublicacionesComponent = ({activeCheckboxes, searchTerm, changePage, getImgId}) => {
    
    const imagenes = useImagenes(activeCheckboxes, searchTerm)

    const viewImg = (id) =>{
        getImgId(id)
        changePage('preview')
    }

    return (
        <>  
            {/* <Carousel /> */}
            {/*La idea del slider queda suspendida */}

            <div className="flex flex-col justify-center items-center my-2.5">
                <div className="columns-5 max-md:columns-3 max-[300px]:columns-2 ">
                    {imagenes.map(x => <img key={x.idPublicacion} src={x.archivo} alt={x.titulo} value={x.idPublicacion} className="card-imagen-publicacion"
                                            onClick={() => viewImg(x.idPublicacion)}/>)}
                </div>
                <div className="flex flex-row">
                    <svg className="animate-spin fill-vulcan-400" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/>
                    </svg>
                    <p className="font-Red-Hat-Display font-medium text-vulcan-400">Cargando...</p>
                </div>
            </div>
        </>
    )
}