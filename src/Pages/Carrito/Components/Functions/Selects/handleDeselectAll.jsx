export const handleDeselectAll = (setSelectedProducts, setTotal) => {
    // el setSelectedProducts recibe un arreglo vacio que deseleccionar los checkboxes
    setSelectedProducts([])
    // el setTotal recibe un 0 para que el total a pagar sea 0
    setTotal(0)
}
