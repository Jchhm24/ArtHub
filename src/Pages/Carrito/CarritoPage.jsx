import { useState } from "react"
import { CarritoOptions } from "./Components/CarritoOptions/CarritoOptions"
import { PagoModalComponent } from "./Components/PagoModal/PagoModalComponent"


export const CarritoPage = () => {

    // Aqui almacenamos el carrito
    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem('carrito')))
    
    const userId = JSON.parse(localStorage.getItem('userData')).idUsuario

    const updateCarrito = (newCarrito) => {
      // Actualizamos el estado del carrito
      setCarrito(newCarrito)
      // Ahora actualizamos el localStorage del carrito, le tenemos que pasar al carrito actualizado
      localStorage.setItem('carrito', JSON.stringify(newCarrito))
    }
    // Para poder acceder al carrito
    const [modalState, seTmodalState] = useState(false)
    
    return (
      <>
        <CarritoOptions carrito={carrito} updateCarrito={updateCarrito} userId={userId} seTmodalState={seTmodalState}/>
        {modalState &&
          <PagoModalComponent modalState={modalState} closeModal={()=> seTmodalState(false)}/>
        }
      </>
    )
}
