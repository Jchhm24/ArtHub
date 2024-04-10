import { useState } from "react"
import { usePublicacionesUser } from "../Perfil/Components/UserPublicaciones/Hooks/usePublicacionesUser"
import { TitlesComponent } from "./Components/TitlesComponent"

export const Dashboardpage = () => {

  const publicaciones = usePublicacionesUser()

  const idsPublicaciones = publicaciones.map(x => x.idPublicacion)

  const [totalVentas, setTotalVentas] = useState(0)

  return (
    <div className="mt-[30px] mx-[30px]">
      <TitlesComponent publicaciones={publicaciones} idsPublicaciones={idsPublicaciones} totalVentas={totalVentas} setTotalVentas={setTotalVentas}/>
    </div>
  )
}
