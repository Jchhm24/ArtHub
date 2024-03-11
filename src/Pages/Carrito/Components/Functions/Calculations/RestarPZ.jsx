export const RestarPZ = (id, carrito, updateCarrito, total, setTotal, selectedProducts) => {
    // Encuentra el producto en el carrito
    const producto = carrito.find(x => x.id === id);

    // Verifica si la cantidad del producto es mayor que 1 antes de hacer cualquier cosa
    if (producto && producto.cantidad > 1) {
        // Creamos un nuevo carrito decrementando la cantidad del producto seleccionado
        const newCarrito = carrito.map(x => x.id === id ? {...x, cantidad: x.cantidad - 1} : x)
        // Guardamos el nuevo carrito en localStorage
        updateCarrito(newCarrito)

        // Solo actualizamos el total si el producto está seleccionado
        if (selectedProducts.includes(id)) {
            setTotal(total - producto.precio)
        }
    }
}