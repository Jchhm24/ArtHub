import { useEffect, useState } from "react"

export const CardCarrito = () => {
    const [carrito, setCarrito] = useState([])

    useEffect(() => {
        const carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'))
        if(carritoLocalStorage)
            setCarrito(carritoLocalStorage)
    }, [])

    const handleMore = (id, action) => {
        const newCarrito = carrito.map((item) => {
            // si coincide con la id de la card entonces se ejecuta si no lo ignora
            if (item.id === id) {
                if (action === 'sumar') {
                    return {...item, cantidad: item.cantidad + 1};
                } else {
                    return {...item, cantidad: item.cantidad > 1 ? item.cantidad - 1 : 1};
                }
            } else {
                return item;
            }
        });
        setCarrito(newCarrito);
        localStorage.setItem('carrito', JSON.stringify(newCarrito));
        console.table(carrito)
    }
    

    return (
        <>{
            carrito.map((x =>(x.userId === JSON.parse(localStorage.getItem('userData')).idUsuario) &&                
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
                            <div className="flex flex-row">
                                <p className="text-xl font-semibold">Cantidad pz:</p>
                                <div className="flex items-center">
                                    <button onClick={() => handleMore(x.id, 'sumar')}
                                    className="rounded-l-lg bg-gold-sand-500 border-2 border-gold-sand-500">
                                      {/* Mas >>>>>> */}
                                      <svg className="fill-yellow-orange-200" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z"/></svg>
                                    </button>
                                    <span className="border-y-2 border-y-gold-sand-500 w-[50px] text-center">
                                        {x.cantidad}
                                    </span>
                                    <button onClick={() => handleMore(x.id, 'restar')}
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
                        <p>Tamaño: 
                            {x.tamaño === 'w-[275px]' && ' Original'}
                            {x.tamaño === 'w-[200px] h-[250px]' && ' 20x25cm'}
                            {x.tamaño === 'w-[280px] h-[250px]' && ' 28x25cm'}
                            {x.tamaño === 'w-[400px] h-[500px]' && ' 40x50cm'}
                            {x.tamaño === 'w-[460px] h-[610px]' && ' 46x61cm'}
                            {x.tamaño === 'w-[610px] h-[910px]' && ' 61x91cm'}
                        </p>                    <p>Marco: </p>
                        <p>Filtros: 
                            {x.filtro === '' && ' Sin filtro'}
                            {x.filtro === 'grayscale' && ' Monocromatico'}
                            {x.filtro === 'sepia' && ' Sepia'}
                        </p>
                        <p>Tipo de impresión: </p>
                    </section>

                    <section className="flex flex-col gap-5 max-md:flex-row">
                        <div className="p-2 rounded-lg bg-nile-blue-700 cursor-pointer">
                            <input type="checkbox" name="" id=""/>
                        </div>
                        <buttom className="button-card-carrito">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM400-280q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280Zm160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280ZM280-720v520-520Z"/></svg>
                        </buttom>
                        <buttom className="button-card-carrito">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M167-120q-21 5-36.5-10.5T120-167l40-191 198 198-191 40Zm191-40L160-358l458-458q23-23 57-23t57 23l84 84q23 23 23 57t-23 57L358-160Zm317-600L261-346l85 85 414-414-85-85Z"/></svg>
                        </buttom>
                    </section>
                </div>
            ))    
        }</>
    )   
}       
