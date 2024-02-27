import { useState } from "react"
import { usePublicacion } from "../hook/usePublicacion"

export const PreviewComponent = ({id, changePage}) => {

    const Id = id

    const publicacion = usePublicacion(Id)

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

    // Para cambiar el tamaño de la imagen
    const [tamaño, setTamaño] = useState('w-[275px]');

    const manejarCambio = (evento) => {
      const tamañoSeleccionado = evento.target.value;
      setTamaño(tamañoSeleccionado);
    }

    // Para ponerle filtro a la imagen
    const [filter, setFilter] = useState('');
    
    const handleFilterChange = (event) => {
      setFilter(event.target.value);
    }

    return (
      <div className=" mt-7 relative w-full flex flex-row place-content-around text-yellow-orange-300
        max-md:flex-col max-md:gap-5">
        {/* Parte de la imagen con creador y descripción */}
          <section className="w-[500px] grid grid-cols-1 place-items-center
            max-md:w-full">
            <div className="w-auto flex flex-col gap-5">
              
            <img src={publicacion.archivo} alt={publicacion.titulo} className={`${tamaño} ${filter} rounded-lg`}/>
              
              <div className="flex items-center place-content-between">
                <div className="flex flex-row items-center gap-1">
                  <img src="/img/Perfil/perfil-user-1.jpeg" alt="user-example" className="rounded-full h-[30px] w-[30px]"/>
                  <h2 className="font-Red-Hat-Display text-base">
                    {publicacion.nombreArtista}
                  </h2>
                </div>

                <div>
                  <input type="checkbox" id="like" className="peer hidden"/>

                    <label htmlFor="like" className="peer-checked:hidden">
                      <svg className="fill-red-600" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-147q-14 0-28.5-5T426-168l-69-63q-106-97-191.5-192.5T80-634q0-94 63-157t157-63q53 0 100 22.5t80 61.5q33-39 80-61.5T660-854q94 0 157 63t63 157q0 115-85 211T602-230l-68 62q-11 11-25.5 16t-28.5 5Zm-38-543q-29-41-62-62.5T300-774q-60 0-100 40t-40 100q0 52 37 110.5T285.5-410q51.5 55 106 103t88.5 79q34-31 88.5-79t106-103Q726-465 763-523.5T800-634q0-60-40-100t-100-40q-47 0-80 21.5T518-690q-7 10-17 15t-21 5q-11 0-21-5t-17-15Zm38 189Z"/></svg>
                    </label>

                    <label htmlFor="like" className="hidden peer-checked:flex">
                      <svg className="fill-red-600" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-147q-14 0-28.5-5T426-168l-69-63q-106-97-191.5-192.5T80-634q0-94 63-157t157-63q53 0 100 22.5t80 61.5q33-39 80-61.5T660-854q94 0 157 63t63 157q0 115-85 211T602-230l-68 62q-11 11-25.5 16t-28.5 5Z"/></svg>
                    </label>

                </div>
              </div>
            </div>
          </section>

          {/* Parte de los detalles */}
          <section className=" bg-nile-blue-950 rounded-lg h-max flex flex-col gap-5 p-5 max-md:mx-5">
            <article className="font-Red-Hat-Display text-xl flex flex-col gap-5">
              <h1 className="font-bold text-4xl">{publicacion.titulo}</h1>
              <p>{publicacion.descripcion}</p>

                <div className="p-[10px] bg-vulcan-950 rounded-2xl flex flex-wrap gap-[10px]">
                  {publicacion && typeof publicacion.categoria === 'string' && publicacion.categoria.split(',').map((categoria, index) => 
                    <p key={index} className="font-bold p-2 border-2 border-gold-sand-500 rounded-lg">{categoria}</p>
                  )}
                </div>

                <h2>Precio: ${publicacion.precio} MX</h2>
            </article>
              
            <hr className="border-2 rounded-full border-yellow-orange-300"/>

            <div className="flex flex-col gap-5 items-start">
                <h2 className="text-4xl font-bold">Ajustes de compra:</h2>
              
                {/* contenedor de opciones */}
                <div className="flex flex-wrap gap-5">
                  {/* Tamaños */}
                  <div>
                    <div className="flex flex-col">
                      <label className="font-medium">Tamaño:</label>
                      <select className="select-option" onChange={manejarCambio}>
                        <option value="w-[275px]">Original</option>
                        <option value="w-[200px] h-[250px]">20x25cm</option>
                        <option value="w-[280px] h-[250px]">28x25cm</option>
                        <option value="w-[400px] h-[500px]">40x50cm</option>
                        <option value="w-[460px] h-[610px]">46x61cm</option>
                        <option value="w-[610px] h-[910px]">61x91cm</option>
                      </select>
                    </div>
                  </div>
                  {/* Marcos */}
                  <div className="flex flex-col">
                      <label className="font-medium">Marcos:</label>
                      <select className="select-option">
                          <option value="">Madera</option>
                          <option value="">Metal</option>
                          <option value="">Aluminio</option>
                          <option value="">Plastico</option>
                          <option value="">Acero inoxidable</option>
                      </select>
                  </div>
                  {/* Tipos de impresion */}
                  <div className="flex flex-col">
                    <label className="font-medium">Tipo de impresión:</label>
                      <select className="select-option">
                          <option value="">Normal</option>
                          <option value="">Poster</option>
                          <option value="">Enmarcado</option>
                    </select>
                  </div>

                  {/* Colores / filtros */}
                  <div className="flex flex-col">
                    <label className="font-medium">Color/Filtro:</label>
                    <select className="select-option" onChange={handleFilterChange}>
                      <option value="">Ninguno</option>
                      <option value="grayscale">Monocromatico</option>
                      <option value="sepia">Sepia</option>
                      {/* Añade más opciones de filtro aquí */}
                    </select>
                  </div>
                </div>

                <div className="flex flex-row gap-1">
                  <label htmlFor="">Cantidad de piezas: </label>
                  <div className="flex items-center">
                    
                    <button onClick={() => counter(true)} className="rounded-l-lg bg-gold-sand-500 border-2 border-gold-sand-500">
                      {/* Mas >>>>>> */}
                      <svg className="fill-yellow-orange-200" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z"/></svg>
                    </button>

                      <label className="border-y-2 border-y-gold-sand-500 w-[50px] text-center">
                        {count}
                      </label>

                    <button onClick={() => counter(false)} className={`rounded-r-lg border-2 ${count > 1 ? 'bg-gold-sand-500 border-gold-sand-500' : 'border-gold-sand-700' }`}>
                      {/* Menos <<<<< */}
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path fill={count === 1 ? '#e9944e' : '#fdd28a'} d="M240-440q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h480q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H240Z"/>
                      </svg>
                    </button>
                  </div>
                </div>
                 <button className="p-1 font-Comfortaa font-medium flex rounded-lg bg-yellow-orange-300 hover:bg-yellow-orange-400 text-vulcan-950">
                 <svg className="fill-vulcan-950" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-720h-80q-17 0-28.5-11.5T320-760q0-17 11.5-28.5T360-800h80v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80h80q17 0 28.5 11.5T640-760q0 17-11.5 28.5T600-720h-80v80q0 17-11.5 28.5T480-600q-17 0-28.5-11.5T440-640v-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM120-800H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h66q11 0 21 6t15 17l159 337h280l145-260q5-10 14-15t20-5q23 0 34.5 19.5t.5 39.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68.5-39t-1.5-79l54-98-144-304Z"/></svg>
                    Agregar 
                 </button>
            </div>
          </section>

          <section className="flex flex-row w-min h-min max-md:absolute max-md:top-0 max-md:right-5">
            <button onClick={() => changePage('inicio')} className="bg-nile-blue-800 p-[6px] hover:bg-nile-blue-900 rounded-lg outline-none">
              <svg className="fill-yellow-orange-300 w-8 h-8 " xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M687-400H300q-75 0-127.5-52.5T120-580q0-75 52.5-127.5T300-760q17 0 28.5 11.5T340-720q0 17-11.5 28.5T300-680q-42 0-71 29t-29 71q0 42 29 71t71 29h387L572-596q-11-11-11.5-27.5T572-652q11-11 28-11t28 11l184 184q12 12 12 28t-12 28L628-228q-12 12-28 11.5T572-229q-11-12-11.5-28t11.5-28l115-115Z"/></svg>
            </button>
          </section>
      </div>
    )
}