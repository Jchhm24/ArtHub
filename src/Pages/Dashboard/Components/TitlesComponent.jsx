import { CardDahsboard } from "./CardDashboard/CardDahsboard"

export const TitlesComponent = () => {
  return (
    <div className="font-Red-Hat-Display text-yellow-orange-300 flex flex-row place-content-evenly font-semibold">
        <div>
          <CardDahsboard />
        </div>
        
        <div className="flex flex-row bg-nile-blue-950 h-max p-2.5 rounded-lg text-2xl">
          <div className="flex flex-col gap-2.5">
              <h1>Tus publicaciones (0)</h1>
              <h1>Venta total: $ MX</h1>
          </div>
        </div>
    </div>
  )
}
