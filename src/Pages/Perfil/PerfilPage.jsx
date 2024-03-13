import { useState } from "react"
import { PerfilComponent } from "./Components/PerfilComponent"
import { EditarPerfil } from "./EditarPerfil/EditarPerfil"

export const PerfilPage = () => {

  const [section, setSection] = useState('perfil')
  // Para que la información del usuario siempre este actualizada
  const [userData, setUserDaauserData] = useState(JSON.parse(localStorage.getItem('userData')) || [])

  // Funciín para actualizar los datos del usuario
  const newDatesUser = (newDates) =>{
    setUserDaauserData(newDates)
    localStorage.setItem('userData', JSON.stringify(newDates))
  }

  const changeSection = (newSection) => {
    setSection(newSection)
  }
  return (
    <>
      {section === 'perfil' && <PerfilComponent changeSection={changeSection} userData={userData}/>
               ||  'editar' && <EditarPerfil changeSection={changeSection} userData={userData} newDatesUser={newDatesUser}/>
      }
    </>
  )
}
