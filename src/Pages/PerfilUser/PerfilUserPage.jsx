import { CardUser } from './Components/CardUser'
import { PublicacionesUser } from './Components/PublicacionesUser'

export const PerfilUserPage = ({userId, changePage, getImgId, setStatePage}) => {
  return (
    <div className="flex flex-row place-content-evenly max-md:flex-col md:my-[30px]">
        <CardUser userId={userId}/>
        <PublicacionesUser userId={userId} changePage={changePage} getImgId={getImgId} setStatePage={setStatePage} />
    </div>
  )
}
