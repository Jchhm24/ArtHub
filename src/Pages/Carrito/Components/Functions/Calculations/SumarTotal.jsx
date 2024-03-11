export const SumarTotal = (id, carrito, total,setTotal) => {
    // Le sumamos al precio a pagar
    const sumar = carrito.filter(x => x.id === id).map(x => x.precio * x.cantidad).reduce((a, b) => a + b, 0)
    // actulizamos el total a pagar
    setTotal(total + sumar)
    // !Con el reduce hacemos que no se devuelva un arreglo si un numero
}
