export const SumarPZ = (id, carrito, updateCarrito, total, setTotal, selectedProducts) => {
    // Creamos un nuevo carrito incrementando la cantidad del producto seleccionado
    const newCarrito = carrito.map(x => x.id === id ? {...x, cantidad: x.cantidad + 1} : x)
    // Guardamos el nuevo carrito en localStorage
    updateCarrito(newCarrito)

    // Solo actualizamos el total si el producto está seleccionado
    if (selectedProducts.includes(id)) {
        setTotal(total + carrito.filter(x => x.id === id).map(x => x.precio).reduce((a, b) => a + b, 0))
    }
}