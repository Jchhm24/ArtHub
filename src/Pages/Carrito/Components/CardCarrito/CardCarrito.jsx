import { useState } from "react"
import { RestarPZ } from "../Functions/Calculations/RestarPZ"
import { SumarPZ } from "../Functions/Calculations/SumarPZ"
import { DeleteProduct } from "../Functions/Delete/DeleteProduct"
import { handleSelect } from "../Functions/Selects/handleSelect"
import { EditarCarritoComponent } from "../EditarCarrito/EditarCarritoComponent"
import { ListTamanos } from "../../../PublicacionPreview/Lists/ListTamanos"
import { ListFiltros } from "../../../PublicacionPreview/Lists/ListFiltros"
import { ListMarcos } from "../../../PublicacionPreview/Lists/ListMarcos"
import { ListTiposImpresion } from "../../../PublicacionPreview/Lists/ListTiposImpresion"

export const CardCarrito = ({carrito, userId, selectedProducts, setSelectedProducts, total, setTotal, updateCarrito}) => {

    const userHasProducts = carrito.some(x => x.userId === userId);

    const [modal, setModal] = useState(false)
    const [editData, setEditData] = useState('')

    const modalState = (state, id, titulo, imagen, tamaño, marco, filtro, impresion) => {
        setModal(state)
        // Sacamos el valor de los atributos para las clases de estilos de renderizados
        const tamañoValue = ListTamanos.reduce((acc ,x ) => x.label === tamaño ? x.value : acc, "")
        const marcoValue = ListMarcos.reduce((acc, x) => x.label === marco ? x.value : acc, "")
        const filtroValue = ListFiltros.reduce((acc, x) => x.label === filtro ? x.value : acc, "")
        const impresionValue = ListTiposImpresion.reduce((acc, x) => x.label === impresion ? x.value : acc, "")
        // Para guardar la información y pasarla al modal para editar el prodcuto
        const productoData = {id, titulo, imagen, tamaño, tamañoValue, marco, marcoValue, filtro, filtroValue, impresion, impresionValue}
        setEditData(productoData)
    }

    return (
        <>{
            userHasProducts ?
            carrito.map((x =>(x.userId === userId) &&                
            <div key={x.id} className="flex flex-row items-center justify-start p-5 rounded-lg bg-nile-blue-950 gap-2.5
                max-md:flex-wrap">
                    {/* Contenedor de la imagen */}
                    <div className="p-2 rounded-lg bg-gold-sand-600 w-[200px] h-[266px]">
                        <img src={x.imagen} alt={x.titulo} className="rounded-lg w-full h-full object-cover" />
                    </div>

                    <span className="hr-card"/>

                    {/* Contenedor de la informacion */}
                    <section className="w-max flex flex-col gap-[60px] p-2.5 max-md:gap-2.5">
                        <div className="flex flex-col gap-2.5">
                            <h1 className="text-xl font-bold">{x.titulo}</h1>
                            <p>Precio: ${x.precio} MX</p>
                        </div>

                        <div className="flex flex-col gap-2.5">
                            <div className="flex flex-row gap-1">
                                <p className="text-xl font-semibold">Cantidad pz:</p>
                                <div className="flex items-center">
                                    <button
                                        onClick={() => SumarPZ(x.id, carrito,updateCarrito, total, setTotal, selectedProducts)}
                                        className="rounded-l-lg bg-gold-sand-500 border-2 border-gold-sand-500">
                                      {/* Mas >>>>>> */}
                                      <svg className="fill-yellow-orange-200" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z"/></svg>
                                    </button>
                                    <span className="border-y-2 border-y-gold-sand-500 w-[50px] text-center">
                                        {x.cantidad}
                                    </span>
                                    <button
                                        onClick={() => RestarPZ(x.id, carrito,updateCarrito, total, setTotal, selectedProducts)}
                                        className={`rounded-r-lg border-2 ${x.id > 1 ? 'bg-gold-sand-500 border-gold-sand-500' : 'border-gold-sand-700' }`}>
                                      {/* Menos <<<<< */}
                                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                        <path fill={x.id === 1 ? '#e9944e' : '#fdd28a'} d="M240-440q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h480q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H240Z"/>
                                      </svg>
                                    </button>
                                </div>
                            </div>
                            <p>Total: ${x.precio * x.cantidad} MX</p>
                        </div>
                    </section>

                    <span className="hr-card"/>

                    <section className="flex flex-col gap-2.5 p-2.5">
                        <h1 className="font-bold text-xl">Ajustes de compra:</h1>
                        <p>Tamaño: {x.tamaño}</p>                    
                        <p>Marco: {x.marco}</p>
                        <p>Filtros: {x.filtro}</p>
                        <p>Tipo de impresión: {x.impresion}</p>
                    </section>

                    <section className="flex flex-col gap-5 max-md:flex-row">
                        {/* Seleccionar */}
                        <div className="p-2 rounded-lg bg-nile-blue-700">
                            <input 
                                type="checkbox" 
                                id={x.id} 
                                className="peer hidden" 
                                checked={selectedProducts.includes(x.id)} 
                                onChange={() => handleSelect(selectedProducts, setSelectedProducts, x.id,carrito, total, setTotal)}
                            />
                            <label htmlFor={x.id} className={`cursor-pointer peer-checked:hidden`}>
                                <svg className="fill-yellow-orange-300" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>
                            </label>
                            {/* Selecionado */}
                            <label htmlFor={x.id} className={`cursor-pointer hidden peer-checked:flex`}>
                                <svg className="fill-yellow-orange-300" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m424-424-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-424ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                            </label>
                        </div>
                        {/* Eliminar */}
                        <buttom 
                            onClick={() => DeleteProduct(x.id, carrito, updateCarrito, total, setTotal, selectedProducts)}
                            className="button-card-carrito">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM400-280q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280Zm160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280ZM280-720v520-520Z"/></svg>
                        </buttom>
                        {/* Editar */}
                        <buttom 
                            onClick={() => modalState(true, x.id, x.titulo, x.imagen, x.tamaño, x.marco, x.filtro, x.impresion)}
                            className="button-card-carrito">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M167-120q-21 5-36.5-10.5T120-167l40-191 198 198-191 40Zm191-40L160-358l458-458q23-23 57-23t57 23l84 84q23 23 23 57t-23 57L358-160Zm317-600L261-346l85 85 414-414-85-85Z"/></svg>
                        </buttom>
                    </section>
                </div> 
            )) 
            :<div className="flex items-center text-center h-full">
              <h1 className="font-bold text-3xl">
                No haz agregado nada al carrito aun :(
              </h1>
            </div> 
        }
        
        {modal && <EditarCarritoComponent openModal={modal} closeModal={() => setModal(false)} editData={editData} carrito={carrito} updateCarrito={updateCarrito}/>}

        </>
    )   
}       