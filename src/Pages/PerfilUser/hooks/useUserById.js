import { useEffect, useState } from "react"
import { getUserById } from "../helpers/getUserById"

export const useUserById = (userId) => {
  
    const [user, setUser] = useState([])

    useEffect(() => {
      const fetchUser =async () =>{
        const data = await getUserById(userId)
        setUser(data)
      }
      
    fetchUser()

    }, [userId])
    
    return user
}
