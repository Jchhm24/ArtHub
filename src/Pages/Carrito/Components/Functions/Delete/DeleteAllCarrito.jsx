export const DeleteAllCarrito = (carrito, setTotal, updateCarrito, userId) => {
    setTotal(0)
    // Creamos un carrito nuevo que no contenga los productos del usuario por medio de un array
    const newCarrito = carrito.filter(x => x.userId !== userId)
    // Actualizamos el estado del carrito
    updateCarrito(newCarrito)
}
