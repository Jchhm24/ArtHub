export const DeleteProduct = (id, carrito, updateCarrito, total, setTotal, selectedProducts) => {
    // Creamos un nuevo carrito sin el producto seleccionado
    const newCarrito = carrito.filter(x => x.id !== id)
    // Guardamos el nuevo carrito en localStorage
    updateCarrito(newCarrito)
    // Solo actualizamos el total si el producto está seleccionado
    if (selectedProducts.includes(id)) {
        setTotal(total - carrito.filter(x => x.id === id).map(x => x.precio * x.cantidad).reduce((a, b) => a + b, 0))
    }
}
