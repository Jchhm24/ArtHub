import { useEffect, useState } from "react"
import { getPublicacionesByIdUser } from "../helpers/getPublicacionesByIdUser"

export const usePublicacionesByUserId = (userId) => {
  const [publicaciones, setPublicaciones] = useState([])

  useEffect(() => {
    const fetchPublicaciones =  async () =>{
        const data = await getPublicacionesByIdUser(userId)
        setPublicaciones(data) 
    }

    fetchPublicaciones()
    
  }, [userId])

  return publicaciones
}
