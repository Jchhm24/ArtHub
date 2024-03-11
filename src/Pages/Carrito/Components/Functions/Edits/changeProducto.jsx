export const changeProducto = (id,tamañoSelect, marcoSelect, filtroSelect, impresionSelect, carrito, updateCarrito, closeModal) => {
    // Editamos los datos del carrito 
    const newCarrito = carrito.map(x => x.id === id ? {...x,tamaño: x.tamaño = tamañoSelect, 
                                                            marco:x.marco = marcoSelect,
                                                            filtro: x.filtro = filtroSelect,
                                                            impresion: x.impresion = impresionSelect
                                                  } : x)
    updateCarrito(newCarrito)
    alert('Producto editado correctamente')
    closeModal()
}
