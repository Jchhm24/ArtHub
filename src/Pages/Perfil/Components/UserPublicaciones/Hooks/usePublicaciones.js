import { useEffect, useState } from "react"
import { getPublicacionesUser } from "../Helpers/getPublicacionesUser"

export const usePublicaciones = () => {
   const [publicacion, setPublicacion] = useState([])

   useEffect(() => {
     const fetchPublicaciones = async () =>{
        const userId = JSON.parse(localStorage.getItem('userData')).idUsuario
        const data = await getPublicacionesUser(userId)
        
        setPublicacion(data)
     }

     fetchPublicaciones()
   }, [])
   

   return  publicacion
}