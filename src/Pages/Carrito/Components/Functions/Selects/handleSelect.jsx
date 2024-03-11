import { RestarTotal } from "../Calculations/RestarTotal"
import { SumarTotal } from "../Calculations/SumarTotal"

export const handleSelect = (selectedProducts, setSelectedProducts, id, carrito ,total, setTotal) => {
    // el if siguiente verifica si el producto ya esta seleccionado
    if(selectedProducts.includes(id)){
        // Si ya esta seleccionado, lo deseleccionamos
        setSelectedProducts(selectedProducts.filter(x => x !== id))
        // Llamamos a la funcion RestarTotal para que se actualize el total
        RestarTotal(id, carrito, total,setTotal)
    }else{
        // Si no esta seleccionado, lo seleccionamos
        setSelectedProducts([...selectedProducts, id])
        // Llamamos a la funcion sumarTotal para que se actualize el total
        SumarTotal(id, carrito, total,setTotal)
    }
}