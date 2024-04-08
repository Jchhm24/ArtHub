import { useEffect, useState } from "react";
import { PanelUserComponent } from "./PanelUser/PanelUserComponent"
import { UserPublicacionesComponent } from "./UserPublicaciones/UserPublicacionesComponent"

export const PerfilComponent = ({changeSection, changePage, getImgId, setStatePage}) => {
  const [userData, setUserDaauserData] = useState(JSON.parse(localStorage.getItem('userData')) || [])

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData))
  }, [userData]);

  return (
    <div className="flex flex-row place-content-evenly max-md:flex-col md:my-[30px]">
        <PanelUserComponent changeSection={changeSection} userData={userData}/>
        <UserPublicacionesComponent changePage={changePage} getImgId={getImgId} setStatePage={setStatePage}/>
    </div>
  )
}
