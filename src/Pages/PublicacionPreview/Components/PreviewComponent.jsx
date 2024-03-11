import { useEffect, useState } from "react"
import { usePublicacion } from "../hook/usePublicacion"
import { ListTamanos } from "../Lists/ListTamanos"
import { ListMarcos } from "../Lists/ListMarcos"
import { ListFiltros } from "../Lists/ListFiltros"
import { ListTiposImpresion } from "../Lists/ListTiposImpresion"

export const PreviewComponent = ({id, changePage, selectAll}) => {
    const Id = id

    const publicacion = usePublicacion(Id)

    const userData = localStorage.getItem('userData');
    const parseUserData = JSON.parse(userData);

    // Camabiar los estilos de la barra lateral, su metodo esta de forma directa en los botones
    const [tool, setTool] = useState('Tamaños')

    // !Los states que estan juntos es por que van tomados de la mano para cambios de estilos y ajustes
    // !El primer State es para cambiar estilos y el segundo es para cambiar la imagen

    const [tamanoSelect, setTamanoSelect] = useState(ListTamanos[0].label)
    const [tamaño, setTamaño] = useState('w-[275px]')

    const changeTamaño = (label, id) =>{
      setTamanoSelect(label)
      setTamaño(ListTamanos.reduce((acc, x ) => x.id === id ? x.value : acc, ""))
    }

    const [marcoSelect, setMarcoSelect] = useState(ListMarcos[0].label)
    const [marco, setMarco] = useState('');

    const changeMarco = (label, id) => {
        setMarcoSelect(label)
        setMarco(ListMarcos.reduce((acc, x) => x.id === id ? x.value : acc, ""))
      }

    const [filtroSelect, setFiltroSelect] = useState(ListFiltros[0].label)
    const [filtro, setFiltro] = useState('')

    const changeFiltro = (label, id) => {
      setFiltroSelect(label)
      setFiltro(ListFiltros.reduce((acc, x) => x.id === id ? x.value : acc, ""));
    }

    const [impresionSelect, setImpresionSelect] = useState(ListTiposImpresion[0].label)

    const [count, setcount] = useState(1)

    const counter = (state) => {
      // Sencillo, si state es true se aumenta y si es false se disminuy, lo hice asi solo usar un metodo
      if(state){
        setcount(count + 1)
      }else{
        setcount(count - 1)
        if(count <= 1){
          setcount(1)
        }
      }
    }

    //Para agregar al carrito
    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem('carrito')) || [])
    const [idCarrito, setIdCarrito] = useState(Number(localStorage.getItem('idCarrito')) || 0)

    const addCarrito = () =>{
      let nuevoItem = {
        id: idCarrito,
        userId: parseUserData.idUsuario,
        titulo: publicacion.titulo,
        idPublicacion: id,
        imagen: publicacion.archivo,
        precio: publicacion.precio,
        cantidad: count,
        tamaño: tamanoSelect,
        marco: marcoSelect,
        filtro: filtroSelect,
        impresion: impresionSelect
      }
      setCarrito(carritoAnterior => [... carritoAnterior, nuevoItem])
      setIdCarrito(idCarrito + 1)
    }
    // para actualizar el carrito
    useEffect(() => {
      localStorage.setItem('carrito', JSON.stringify(carrito))
      localStorage.setItem('idCarrito', idCarrito)
      console.table(carrito)
    }, [carrito, idCarrito, count])

    const deleteC = () => {
      localStorage.removeItem('carrito');
      localStorage.removeItem('idCarrito');
      setCarrito([])
      setIdCarrito(0)
    }
    
    // !Agregar un modal de aviso de que se agrego al carrito

    return (
      <div className="mt-[30px] relative w-full flex flex-row place-content-around text-yellow-orange-300
        max-md:flex-col max-md:gap-5">
        {/* Parte de la imagen con creador y descripción */}
          <section className="w-[500px] grid grid-cols-1 place-items-center
            max-md:w-full">
            <div className="w-auto flex flex-col gap-5">
              {/* TODO:arreglar el marco usando imagenes completas de fonto y marcos */}
            <div className={`p-4 ${marco}`}>
              <img src={publicacion.archivo} alt={publicacion.titulo} className={`${tamaño} ${filtro} rounded-lg`}/>
            </div>
              
              <div className="flex items-center place-content-between">
                <div className="flex flex-row items-center gap-1">
                  <img src={parseUserData.fotoPerfil} alt="user-example" className="rounded-full h-[30px] w-[30px]"/>
                  <h2 className="font-Red-Hat-Display text-base">
                    {publicacion.nombreArtista}
                  </h2>
                </div>

                <div>
                  <input type="checkbox" id="like" className="peer hidden"/>
                    <label htmlFor="like" className="cursor-pointer peer-checked:hidden">
                      <svg className="fill-red-600" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-147q-14 0-28.5-5T426-168l-69-63q-106-97-191.5-192.5T80-634q0-94 63-157t157-63q53 0 100 22.5t80 61.5q33-39 80-61.5T660-854q94 0 157 63t63 157q0 115-85 211T602-230l-68 62q-11 11-25.5 16t-28.5 5Zm-38-543q-29-41-62-62.5T300-774q-60 0-100 40t-40 100q0 52 37 110.5T285.5-410q51.5 55 106 103t88.5 79q34-31 88.5-79t106-103Q726-465 763-523.5T800-634q0-60-40-100t-100-40q-47 0-80 21.5T518-690q-7 10-17 15t-21 5q-11 0-21-5t-17-15Zm38 189Z"/></svg>
                    </label>

                    <label htmlFor="like" className="cursor-pointer hidden peer-checked:flex">
                      <svg className="fill-red-600" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-147q-14 0-28.5-5T426-168l-69-63q-106-97-191.5-192.5T80-634q0-94 63-157t157-63q53 0 100 22.5t80 61.5q33-39 80-61.5T660-854q94 0 157 63t63 157q0 115-85 211T602-230l-68 62q-11 11-25.5 16t-28.5 5Z"/></svg>
                    </label>

                </div>
              </div>
            </div>
          </section>

          {/* Parte de los detalles */}
          <section className=" flex flex-row gap-[30px] max-md:mx-5 h-max">
            <article className=" font-Red-Hat-Display flex flex-col gap-2.5 p-5 rounded-lg bg-nile-blue-950">
              <h1 className="font-bold text-2xl">{publicacion.titulo}</h1>
              <p>{publicacion.descripcion}</p>

                <div className="p-[10px] bg-vulcan-950 rounded-2xl flex flex-wrap gap-[10px]">
                  {publicacion && typeof publicacion.categoria === 'string' && publicacion.categoria.split(',').map((categoria, index) => 
                    <p key={index} className="font-bold p-2 border-2 border-gold-sand-500 rounded-lg">{categoria}</p>
                  )}
                </div>

                <h2>Precio: ${publicacion.precio} MX</h2>

                <div className="flex flex-row gap-1">
                  <label className="text-xl font-medium">Cantidad de piezas: </label>
                  <div className="flex items-center">
                    
                    <button onClick={() => counter(true)} className="rounded-l-lg bg-gold-sand-500 border-2 border-gold-sand-500">
                      {/* Mas >>>>>> */}
                      <svg className="fill-yellow-orange-200" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z"/></svg>
                    </button>

                      <span className="border-y-2 border-y-gold-sand-500 w-[50px] text-center">
                        {count}
                      </span>

                    <button onClick={() => counter(false)} className={`rounded-r-lg border-2 ${count > 1 ? 'bg-gold-sand-500 border-gold-sand-500' : 'border-gold-sand-700' }`}>
                      {/* Menos <<<<< */}
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path fill={count === 1 ? '#e9944e' : '#fdd28a'} d="M240-440q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h480q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H240Z"/>
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Si el nombre del artista es igual al de usuario el botom de agregar no se mostrara */}
                {parseUserData.username === publicacion.nombreArtista 
                  ?<button className="w-max p-1 font-Comfortaa font-medium flex rounded-lg bg-yellow-orange-300 hover:bg-yellow-orange-400 text-vulcan-950">
                      <svg className="fill-vulcan-950" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M167-120q-21 5-36.5-10.5T120-167l40-191 198 198-191 40Zm191-40L160-358l458-458q23-23 57-23t57 23l84 84q23 23 23 57t-23 57L358-160Zm317-600L261-346l85 85 414-414-85-85Z"/></svg>
                      Editar
                  </button>
                    // Si no es igual se mostrara el boton de agregar
                  :<button onClick={addCarrito} className="w-max p-1 font-Comfortaa font-medium flex rounded-lg bg-yellow-orange-300 hover:bg-yellow-orange-400 text-vulcan-950">
                     <svg className="fill-vulcan-950" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-720h-80q-17 0-28.5-11.5T320-760q0-17 11.5-28.5T360-800h80v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80h80q17 0 28.5 11.5T640-760q0 17-11.5 28.5T600-720h-80v80q0 17-11.5 28.5T480-600q-17 0-28.5-11.5T440-640v-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM120-800H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h66q11 0 21 6t15 17l159 337h280l145-260q5-10 14-15t20-5q23 0 34.5 19.5t.5 39.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68.5-39t-1.5-79l54-98-144-304Z"/></svg>
                     Agregar 
                  </button>
                }
                {/* Quitar cuando se terminen los texteos o */}
                <button onClick={deleteC}>
                  eliminar
                </button>
            </article>
              
            {/* Barra lateral de las opciones */}
            <section className=" flex flex-row">
                <div className="bg-nile-blue-900 rounded-l-lg h-max w-min">
                  {tool === 'Tamaños' && ListTamanos.map(x => 
                                          <p key={x.id}
                                            onClick={() => changeTamaño(x.label, x.id)} className={`${tamanoSelect === x.label ? 'option-tool-select' : 'option-tool'}`}>
                                              {x.label}
                                          </p>  
                                        )
                    || tool === 'Marcos' && ListMarcos.map(x => 
                                              <p key={x.id} 
                                                onClick={() => changeMarco(x.label, x.id)} className={`${marcoSelect === x.label ? 'option-tool-select' : 'option-tool'}`}>
                                                  {x.label}
                                              </p>  
                                            )
                    || tool === 'Filtros' && ListFiltros.map(x => 
                                              <p key={x.id} 
                                                onClick={() => changeFiltro(x.label, x.id)} className={`${filtroSelect === x.label ? 'option-tool-select' : 'option-tool'}`}>
                                                  {x.label}
                                              </p>  
                                            )
                    || tool === 'Impresión' && ListTiposImpresion.map(x => 
                                              <p key={x.id}
                                                onClick={() => setImpresionSelect(x.label)} className={`${impresionSelect === x.label ? 'option-tool-select' : 'option-tool'}`}>
                                                  {x.label}
                                              </p>  
                                            )
                  }
                </div>
                {/* Parte de las opciones */}
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

            <section className="flex flex-row w-min h-min max-md:absolute max-md:top-0 max-md:right-5">
              <button onClick={() => changePage('inicio')} className="bg-nile-blue-800 p-[6px] hover:bg-nile-blue-900 rounded-lg outline-none">
                <svg className="fill-yellow-orange-300 w-8 h-8 " xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M687-400H300q-75 0-127.5-52.5T120-580q0-75 52.5-127.5T300-760q17 0 28.5 11.5T340-720q0 17-11.5 28.5T300-680q-42 0-71 29t-29 71q0 42 29 71t71 29h387L572-596q-11-11-11.5-27.5T572-652q11-11 28-11t28 11l184 184q12 12 12 28t-12 28L628-228q-12 12-28 11.5T572-229q-11-12-11.5-28t11.5-28l115-115Z"/></svg>
              </button>
          </section>

          </section>
      </div>
    )
}