export const RestarTotal = (id, carrito, total,setTotal) => {
    // Le restamos el precio al total a pagar
    const restar = carrito.filter(x => x.id === id).map(x => x.precio * x.cantidad).reduce((a, b) => a + b, 0)
    // actualizamos el total a pagar 
    setTotal(total - restar)
    // !Con el reduce hacemos que no se devuelva un arreglo si un numero
}
