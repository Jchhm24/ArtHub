import { useEffect, useState } from "react"
import { CarritoOptions } from "./Components/CarritoOptions/CarritoOptions"

export const CarritoPage = () => {

    // Aqui almacenamos el carrito
    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem('carrito') || []))
    
    const userId = JSON.parse(localStorage.getItem('userData')).idUsuario

    const updateCarrito = (newCarrito) => {
      // Actualizamos el estado del carrito
      setCarrito(newCarrito)
      // Ahora actualizamos el localStorage del carrito, le tenemos que pasar al carrito actualizado
      localStorage.setItem('carrito', JSON.stringify(newCarrito))
    }

    // Usamos useEffect para imprimir carrito cada vez que se actualiza además de que se actualiza el carrito en localStorage
    useEffect(() => {
      console.table(carrito)
    }, [carrito])
    
    return (
      <>
        <CarritoOptions carrito={carrito} updateCarrito={updateCarrito} userId={userId}/>
      </>
    )
}
