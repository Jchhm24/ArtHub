import { useState } from "react"
import { ListTamanos } from "../../../PublicacionPreview/Lists/ListTamanos"
import { ListMarcos } from "../../../PublicacionPreview/Lists/ListMarcos"
import { ListFiltros } from "../../../PublicacionPreview/Lists/ListFiltros"
import { ListTiposImpresion } from "../../../PublicacionPreview/Lists/ListTiposImpresion"
import { changeMarco } from "../Functions/Edits/changeMarco"
import { changeTamaño } from "../Functions/Edits/changeTamaño"
import { changeFiltro } from "../Functions/Edits/changeFiltro"
import { changeImpresion } from "../Functions/Edits/changeImpresion"
import { changeProducto } from "../Functions/Edits/changeProducto"

export const EditarCarritoComponent = ({openModal, closeModal, editData, carrito, updateCarrito}) => {
    // Desectructure el editData para tener sus valores mas accesibles
    const {id, titulo, imagen, tamaño, tamañoValue, marco, marcoValue, filtro, filtroValue, impresion, impresionValue} = editData

    const [tool, setTool] = useState('Tamaños')

    //Para cambiar los tamaño de la imagen
    const [tamañoSelect, setTamañoSelect] = useState(tamaño)
    const [Tamaño, setTamaño] = useState(tamañoValue)

    const [filtroSelect, setFiltroSelect] = useState(filtro)
    const [Filtro, setFiltro] = useState(filtroValue)

    const [marcoSelect, setMarcoSelect] = useState(marco)
    const [Marco, setMarco] = useState(marcoValue)

    const [impresionSelect, setImpresionSelect] = useState(impresion)
    const [Impresion, setImpresion] = useState(impresionValue)

    return (
      <>
          <div className="h-screen w-full bg-black/70 absolute z-20 inset-0 backdrop-blur"></div>
          <dialog
              open={openModal}
              className="flex flex-col p-5 gap-5 rounded-lg bg-vulcan-950 z-30 absolute inset-0 outline-none items-center"
          >

            <h1 className="font-Red-Hat-Display font-bold text-3xl text-yellow-orange-300 text-center">
              Editar producto añadido
            </h1>

            <div className="flex flex-row gap-5">
                {/* aqui se renderiza la imagen */}
                <section className=" border-black">
                    <div className={`p-4 ${Marco}`}>
                        <img src={imagen} alt={titulo} className={`rounded-lg ${Tamaño} ${Filtro}`}/>
                    </div>
                </section>

                {/* Barra lateral */}
                <section className="flex flex-row">
                    {/* Lista de las opciones disponibles */}
                    <div className="bg-nile-blue-900 rounded-l-lg h-max w-min ">{
                        tool === 'Tamaños' && ListTamanos.map(x => 
                                                <p key={x.id} onClick={() => changeTamaño(x.label, x.id, setTamañoSelect, setTamaño)} className={`${tamañoSelect ===  x.label ? 'option-tool-select' : 'option-tool'}`}>  
                                                    {x.label}
                                                </p>
                                            )
                        || tool === 'Marcos' && ListMarcos.map(x =>
                                                <p key={x.id} onClick={() => changeMarco(x.label, x.id, setMarcoSelect, setMarco)} className={`${marcoSelect === x.label ? 'option-tool-select' : 'option-tool'}`}>
                                                    {x.label}
                                                </p>
                                            )
                        || tool === 'Filtros' &&  ListFiltros.map(x =>
                                                <p key={x.id} onClick={() => changeFiltro(x.label, x.id, setFiltroSelect, setFiltro)} className={`${filtroSelect === x.label ? 'option-tool-select' : 'option-tool'}`}>
                                                    {x.label}
                                                </p>
                                            )
                        || tool === 'Impresión' && ListTiposImpresion.map(x => 
                                                <p key={x.id} onClick={() => changeImpresion(x.label, x.id, setImpresionSelect, setImpresion)} className={`${impresionSelect === x.label ? 'option-tool-select' : 'option-tool'}`} >
                                                    {x.label}
                                                </p>
                                            )
                    }</div>
                    {/* Lista de las opciones */}
                    <div className="flex flex-col items-center bg-nile-blue-950 rounded-r-lg rounded-b-lg h-max">
                      <h1 className=" py-[10px] font-Red-Hat-Display text-xl font-bold text-yellow-orange-300">
                        Ajustes:
                      </h1>
                      <button onClick={() => setTool('Tamaños')} className={`${tool === 'Tamaños' ? 'options-tools-button-active' : 'options-tools-button'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M680-360h-80q-17 0-28.5 11.5T560-320q0 17 11.5 28.5T600-280h120q17 0 28.5-11.5T760-320v-120q0-17-11.5-28.5T720-480q-17 0-28.5 11.5T680-440v80ZM280-600h80q17 0 28.5-11.5T400-640q0-17-11.5-28.5T360-680H240q-17 0-28.5 11.5T200-640v120q0 17 11.5 28.5T240-480q17 0 28.5-11.5T280-520v-80ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/></svg>
                        Tamaños
                      </button>
                      <button onClick={() => setTool('Marcos')} className={`${tool === 'Marcos' ? 'options-tools-button-active' : 'options-tools-button'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-80q-33 0-56.5-23.5T80-160v-560q0-33 23.5-56.5T160-800h160l132-132q12-12 28-12t28 12l132 132h160q33 0 56.5 23.5T880-720v560q0 33-23.5 56.5T800-80H160Zm0-80h640v-560H160v560Zm80-120v-320q0-17 11.5-28.5T280-640h400q17 0 28.5 11.5T720-600v320q0 17-11.5 28.5T680-240H280q-17 0-28.5-11.5T240-280Zm80-40h320v-240H320v240Zm160-120Z"/></svg>
                        Marcos
                      </button>
                      <button onClick={() => setTool('Filtros')} className={`${tool === 'Filtros' ? 'options-tools-button-active' : 'options-tools-button'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-80q-33 0-56.5-23.5T360-160v-160H240q-33 0-56.5-23.5T160-400v-280q0-66 47-113t113-47h440q17 0 28.5 11.5T800-800v400q0 33-23.5 56.5T720-320H600v160q0 33-23.5 56.5T520-80h-80ZM240-560h480v-200h-40v120q0 17-11.5 28.5T640-600q-17 0-28.5-11.5T600-640v-120h-40v40q0 17-11.5 28.5T520-680q-17 0-28.5-11.5T480-720v-40H320q-33 0-56.5 23.5T240-680v120Zm0 160h480v-80H240v80Zm0 0v-80 80Z"/></svg>
                        Filtros
                      </button>
                      <button onClick={() => setTool('Impresión')} className={`${tool === 'Impresión' ? 'options-tools-button-active' : 'options-tools-button'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-120q-33 0-56.5-23.5T240-200v-80h-80q-33 0-56.5-23.5T80-360v-160q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v160q0 33-23.5 56.5T800-280h-80v80q0 33-23.5 56.5T640-120H320ZM160-360h80q0-33 23.5-56.5T320-440h320q33 0 56.5 23.5T720-360h80v-160q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160Zm480-280v-120H320v120h-80v-120q0-33 23.5-56.5T320-840h320q33 0 56.5 23.5T720-760v120h-80Zm80 180q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320ZM160-560h640-640Z"/></svg>
                        Impresión
                      </button>
                    </div>
                </section>

                {/* Boton de cerrar el modal */}
                <button onClick={closeModal} className="bg-nile-blue-950 hover:bg-nile-blue-900 fill-yellow-orange-300 hover:fill-yellow-orange-200 rounded-lg h-max p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/></svg>
                </button>
            </div>

            <button
                onClick={() => changeProducto(id,tamañoSelect, marcoSelect, filtroSelect, impresionSelect, carrito, updateCarrito, closeModal)}
                className="font-Comfortaa font-medium text-vulcan-950 bg-yellow-orange-300 rounded-lg w-max px-2 py-1 hover:bg-yellow-orange-400 hover:text-vulcan-900">
                Guardar cambios
            </button>
          </dialog>
      </>
    )
}
