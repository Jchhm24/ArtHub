import { useState } from "react"
import { CardCarrito } from "../CardCarrito/CardCarrito"
import { DeleteAllCarrito } from "../Functions/Delete/DeleteAllCarrito"
import { handleSelectAll } from "../Functions/Selects/handleSelectAll"
import { handleDeselectAll } from "../Functions/Selects/handleDeselectAll"

export const CarritoOptions = ({carrito,updateCarrito,userId, seTmodalState}) => {
    // Eststado para almacenar el total a pagar
    const [total, setTotal] = useState(0)
    // Estado para almacenar los productos seleccionados
    const [selectedProducts, setSelectedProducts] = useState([])

    // !Todas las funciones de este Componente estan en la carpeta function que dentro de Functions,
    // !hay mas carpetas que contienen las funciones que se usan en este componente y en el CardCarrito

    return (
        <div className="flex flex-row gap-5 text-yellow-orange-300 font-Red-Hat-Display mx-[215px] mt-5
            max-md:mx-5">
            {/* Titulo y card de compra */}
            <section className="flex flex-col">
                {/* Titulo */}
                <div className=" gap-2.5 px-2.5">
                    <h1 className="font-bold">
                        Tu carrito ( {carrito.filter(x => x.userId === userId).length} )
                    </h1>
                    <p className="font-medium">
                        Seleccione los productos que desea comprar
                    </p>
                </div>
                {/* Card de compra */}
                <div className=" h-full flex flex-col gap-5 mt-5">
                    {
                        <CardCarrito 
                            carrito={carrito} 
                            userId={userId} 
                            selectedProducts={selectedProducts} 
                            setSelectedProducts={setSelectedProducts} 
                            total={total} 
                            setTotal={setTotal}
                            updateCarrito={updateCarrito}
                        />
                    }
                </div>
            </section>
                  
            {/* Cards de las opciones del carrito */}
            <section className="flex flex-col gap-5">
                {/* Total a pagar */}
                <div className="flex flex-col bg-nile-blue-950 rounded-lg p-2.5 gap-2.5">
                    <h1 className="font-bold text-2xl">
                        Total a pagar:
                    </h1>
                    <p>
                        Total a pagar: $ {total} MX
                    </p>
                    <button className="nav-section-active" onClick={()=> seTmodalState(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M481-120q-17 0-28.5-11.5T441-160v-46q-45-10-79-35t-55-70q-7-14-.5-29.5T330-363q14-6 29 .5t23 21.5q17 30 43 45.5t64 15.5q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-44q0-17 11.5-28.5T481-840q17 0 28.5 11.5T521-800v44q38 6 66 24.5t46 45.5q9 13 3.5 29T614-634q-14 6-29 .5T557-653q-13-14-30.5-21.5T483-682q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v44q0 17-11.5 28.5T481-120Z"/></svg>
                        Pagar
                    </button>
                </div>
                {/* Opciones extras */}
                <div className="flex flex-col bg-nile-blue-950 rounded-lg p-2.5 gap-2.5">
                    <h2 className="font-bold text-2xl">
                        Opciones extras:
                    </h2>
                    <button
                        onClick={() => DeleteAllCarrito(carrito, setTotal, updateCarrito, userId)} 
                        className="nav-section-active">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Zm200 316 76 76q11 11 28 11t28-11q11-11 11-28t-11-28l-76-76 76-76q11-11 11-28t-11-28q-11-11-28-11t-28 11l-76 76-76-76q-11-11-28-11t-28 11q-11 11-11 28t11 28l76 76-76 76q-11 11-11 28t11 28q11 11 28 11t28-11l76-76Z"/></svg>
                        Borrar todo
                    </button>
                    <button  
                        onClick={() => handleSelectAll(carrito,setSelectedProducts, userId, setTotal)}
                        className="nav-section-active">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m424-424-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-424ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                        Seleccionar todo
                    </button>
                    <button  
                        onClick={() => handleDeselectAll(setSelectedProducts, setTotal)}
                        className="nav-section-active">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m424-424-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-424ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                        Deseleccionar todo
                    </button>
                </div>
            </section>
        </div>
    )
}
