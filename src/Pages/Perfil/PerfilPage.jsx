import { useEffect, useState } from "react"
import { PerfilComponent } from "./Components/PerfilComponent"
import { EditarPerfil } from "./EditarPerfil/EditarPerfil"

export const PerfilPage = ({changePage, getImgId, setStatePage}) => {

  const [section, setSection] = useState('perfil')
  // Para que la información del usuario siempre este actualizada
  const [userData, setUserDaauserData] = useState(JSON.parse(localStorage.getItem('userData')) || [])

  useEffect(() => {
    // Aquí puedes manejar los cambios en userData
    // Por ejemplo, podrías actualizar el localStorage aquí en lugar de hacerlo en newDatesUser
    localStorage.setItem('userData', JSON.stringify(userData))
  }, [userData]);

  // Función para actualizar los datos del usuario
  const newDatesUser = (newDates) =>{
    setUserDaauserData(newDates)
  }

  const changeSection = (newSection) => {
    setSection(newSection)
  }
  return (
    <>
      {section === 'perfil' && <PerfilComponent changeSection={changeSection} userData={userData} changePage={changePage} getImgId={getImgId} setStatePage={setStatePage}/>
               ||  'editar' && <EditarPerfil changeSection={changeSection} userData={userData} newDatesUser={newDatesUser}/>
      }
    </>
  )
}
