import { PanelUserComponent } from "../PanelUser/PanelUserComponent"
import { UserPublicacionesComponent } from "../UserPublicaciones/UserPublicacionesComponent"

export const PerfilComponent = ({changeSection}) => {
  return (
    <>
        <PanelUserComponent changeSection={changeSection}/>
        <UserPublicacionesComponent />
    </>
  )
}
