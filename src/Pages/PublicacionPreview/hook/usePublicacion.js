import { useEffect, useState } from "react"
import { getPublicacion } from "../helper/getPublicacion"

export const usePublicacion = (id) => {

  const [publicacion, setPublicacion] = useState([])

    useEffect(() => {
        const fetchPublicacion = async () => {
            const data = await getPublicacion(id)
            
            // hacer el set de la publicacion
            setPublicacion(data)
        }
    
        fetchPublicacion()
    }, [id])

    return publicacion
}
