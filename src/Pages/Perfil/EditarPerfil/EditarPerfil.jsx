import { BarSideSections } from "./Components/BarSide/BarSideSections"

export const EditarPerfil = ({changeSection, userData, newDatesUser}) => {
  return (
    <>
      <BarSideSections changeSection={changeSection} userData={userData} newDatesUser={newDatesUser}/>
    </>
  )
}
