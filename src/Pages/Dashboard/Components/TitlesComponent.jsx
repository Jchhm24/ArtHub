import { CardDahsboard } from "./CardDashboard/CardDahsboard"

export const TitlesComponent = ({publicaciones, idsPublicaciones, totalVentas,setTotalVentas}) => {
  return (
    <div className="font-Red-Hat-Display text-yellow-orange-300 flex flex-row max-md:flex-col-reverse max-md:gap-5 place-content-evenly font-semibold">
        <div>
          <CardDahsboard publicaciones={publicaciones} setTotalVentas={setTotalVentas}/>
        </div>
        
        <div className="flex flex-row bg-nile-blue-950 h-max p-2.5 rounded-lg">
          <div className="flex flex-col gap-2.5">
            <h1 className="text-2xl">
              Tus publicaciones ({idsPublicaciones.length})
            </h1>              
            <h1 className="text-xl">
              Venta total: $ {totalVentas} MX
            </h1>
          </div>
        </div>
    </div>
  )
}
