import { counter } from "../../Functions/Calculations/counter"

export const CantidadSectionComponent = ({count, setCount}) => {
  return (
    <div className="flex flex-row gap-1">
        <label className="text-xl font-medium">Cantidad de piezas: </label>
        <div className="flex items-center">
            
          <button onClick={() => counter(true, count, setCount)} className="rounded-l-lg bg-gold-sand-500 border-2 border-gold-sand-500">
            {/* Mas >>>>>> */}
            <svg className="fill-yellow-orange-200" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z"/></svg>
          </button>
            <span className="border-y-2 border-y-gold-sand-500 w-[50px] text-center">
              {count}
            </span>
                                                     
          <button onClick={() => counter(false, count, setCount)} className={`rounded-r-lg border-2 ${count > 1 ? 'bg-gold-sand-500 border-gold-sand-500' : 'border-gold-sand-700' }`}>
            {/* Menos <<<<< */}
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path fill={count === 1 ? '#e9944e' : '#fdd28a'} d="M240-440q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h480q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H240Z"/>
            </svg>
          </button>
        </div>
      </div>
  )
}
