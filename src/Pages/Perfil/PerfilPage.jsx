import { useState } from "react"
import { PerfilComponent } from "./Components/Perfil/PerfilComponent"
import { EditarPerfil } from "./EditarPerfil/EditarPerfil"

export const PerfilPage = () => {

  const [section, setSection] = useState('perfil')

  const changeSection = (newSection) => {
    setSection(newSection)
  }

  return (
    <>
    {section === 'perfil' && <PerfilComponent changeSection={changeSection}/>
             ||  'editar' && <EditarPerfil changeSection={changeSection}/>
    }
    </>
  )
}
