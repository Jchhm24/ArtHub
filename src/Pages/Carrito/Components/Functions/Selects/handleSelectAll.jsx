import { SumarAllTotal } from "../Calculations/SumarAllTotal"

export const handleSelectAll = (carrito, setSelectedProducts, userId, setTotal) => {
    // Filtramos los productos que coinciden con el userId
    const userProducts = carrito.filter(x => x.userId === userId)
    // Obtenemos las ids de los productos del usuario
    const allProductIds = userProducts.map(x => x.id)
    // 
    setSelectedProducts(allProductIds)
    // Llamamos a la funcion SumarAllTotal para que se actualize el total con todos los productos del usuario
    SumarAllTotal(carrito, allProductIds, setTotal)
}
