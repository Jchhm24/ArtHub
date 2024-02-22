import { useContext, useState } from "react"
import { ListCategorias } from "./ListCategorias"
import { CheckboxContext } from "./CheckboxContext"

export const FiltrosComponent = () => {

    const { activeCheckboxes, setActiveCheckboxes } = useContext(CheckboxContext)
    const [count, setCount] = useState(0)

    const handleCheckboxChange = (event) => {
        if (event.target.checked) {
            setActiveCheckboxes(prevCheckboxes => {
                const updatedCheckboxes = [...prevCheckboxes, event.target.id];
                setCount(updatedCheckboxes.length)
                return updatedCheckboxes;
            });
        } else {
            setActiveCheckboxes(prevCheckboxes => {
                const updatedCheckboxes = prevCheckboxes.filter(id => id !== event.target.id);
                setCount(updatedCheckboxes.length)
                return updatedCheckboxes;
            });
        }
    };
    
    return (
      <section className="flex flex-row gap-5 m-3 items-center">
        {/* Indicador de los filtrados activados */}
          <div className="flex flex-row items-center font-Red-Hat-Display font-medium bg-yellow-orange-400 rounded-full">
            <div className="bg-yellow-orange-300 rounded-full p-2">
              <svg className="fill-pickled-bluewood-900 w-[27px] h-[27px] rotate-90" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                  <path d="M710-150q-63 0-106.5-43.5T560-300q0-63 43.5-106.5T710-450q63 0 106.5 43.5T860-300q0 63-43.5 106.5T710-150Zm0-80q29 0 49.5-20.5T780-300q0-29-20.5-49.5T710-370q-29 0-49.5 20.5T640-300q0 29 20.5 49.5T710-230Zm-270-30H200q-17 0-28.5-11.5T160-300q0-17 11.5-28.5T200-340h240q17 0 28.5 11.5T480-300q0 17-11.5 28.5T440-260ZM250-510q-63 0-106.5-43.5T100-660q0-63 43.5-106.5T250-810q63 0 106.5 43.5T400-660q0 63-43.5 106.5T250-510Zm0-80q29 0 49.5-20.5T320-660q0-29-20.5-49.5T250-730q-29 0-49.5 20.5T180-660q0 29 20.5 49.5T250-590Zm510-30H520q-17 0-28.5-11.5T480-660q0-17 11.5-28.5T520-700h240q17 0 28.5 11.5T800-660q0 17-11.5 28.5T760-620Zm-50 320ZM250-660Z"/>
              </svg>
            </div>
            <span className="p-2  rounded-full text-center text-pickled-bluewood-900">
                {count}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">{
                // !Las categorias vienen de una lista que esta importa
                ListCategorias.map((x => 
                    <div key={x.id} className="flex flex-row items-center font-Comfortaa font-semibold">
                        <input type="checkbox" id={x.categoria} className="hidden peer" onChange={handleCheckboxChange}/>
                        <label htmlFor={x.categoria} className="cursor-pointer text-pickled-bluewood-900 py-1 px-2 rounded-full border-2 border-pickled-bluewood-900 peer-checked:text-yellow-orange-300 peer-checked:bg-pickled-bluewood-900">
                            {x.categoria}
                        </label>
                    </div>
                ))
            }
          </div>
      </section>
    )
}
