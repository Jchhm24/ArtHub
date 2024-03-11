export const SumarAllTotal = (carrito, allProductIds, setTotal) => {
    // Obtenemos el total a pagar por medio de la suma de los precios de los productos seleccionados y piezas
    const total = carrito.filter(x => allProductIds.includes(x.id)).reduce((acc, x) => acc + x.precio * x.cantidad, 0)
    setTotal(total)
}
