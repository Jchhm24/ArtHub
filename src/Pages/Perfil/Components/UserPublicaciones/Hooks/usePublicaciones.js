import { useEffect, useState } from "react"
import { getPublicaciones } from "../Helpers/getPublicaciones"

export const usePublicaciones = () => {
   const [publicacion, setPublicacion] = useState([])

   useEffect(() => {
     const fetchPublicaciones = async () =>{
        const data =await getPublicaciones()
        
        setPublicacion(data)
     }

     fetchPublicaciones()
   }, [])
   

   return  publicacion
}
