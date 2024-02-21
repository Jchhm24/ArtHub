import { useEffect, useState } from "react"
import { getImagenes } from "../helpers/getImagenes"

export const useImagenes = () => {

    const [imagenes, setImagenes] = useState([])

    // Aqui se hace el fetch de las imagenes para que se muestren en el componente por medio del hook
    useEffect(() => {
      const fetchImagenes = async () => {
        const data = await getImagenes()
        setImagenes(data)
      }

      fetchImagenes()
    }, [])
    

    return imagenes
}
