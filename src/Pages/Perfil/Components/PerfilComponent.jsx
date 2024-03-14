import { PanelUserComponent } from "./PanelUser/PanelUserComponent"
import { UserPublicacionesComponent } from "./UserPublicaciones/UserPublicacionesComponent"

export const PerfilComponent = ({changeSection, userData, changePage, getImgId, setStatePage}) => {
  return (
    <div className="flex flex-row place-content-evenly max-md:flex-col md:my-[30px]">
        <PanelUserComponent changeSection={changeSection} userData={userData}/>
        <UserPublicacionesComponent changePage={changePage} getImgId={getImgId} setStatePage={setStatePage}/>
    </div>
  )
}
