import { useEffect, useState } from "react"

export const CardDahsboard = ({publicaciones ,setTotalVentas}) => {

    const [ventas, setVentas] = useState([]);

    useEffect(() => {
        // Generar un número aleatorio para las ventas para cada publicación
        const nuevasVentas = publicaciones.map(() => Math.floor(Math.random() * (12 - 8 + 1)) + 8);
        setVentas(nuevasVentas);
    }, [publicaciones]);

    useEffect(() => {
        // Calcular el total de ventas
        let totalVentas = 0;
        for (let i = 0; i < publicaciones.length; i++) {
            totalVentas += ventas[i] * publicaciones[i].precio;
        }
        setTotalVentas(totalVentas);
    }, [ventas, publicaciones, setTotalVentas]);

    return (
      <div>    
          <div className="flex flex-col gap-5 justify-center w-max max-md:w-full">
              {publicaciones.map((x, index) => {
                const likes = Math.floor(Math.random() * (500 - 100 + 1)) + 100;

                // Usar el número aleatorio para las ventas que se generó anteriormente
                const total = ventas[index] ? ventas[index] * x.precio : 0;

                return(
                    <div key={x.idPublicacion}
                    className=' bg-nile-blue-950 rounded-lg p-2.5 flex flex-row gap-2 justify-center relative font-Red-Hat-Display text-yellow-orange-300 h-min'
                >
                    {/* Para renderizar la imagen */}
                    <section className='flex items-center max-md:flex-col'>
                        <div className="p-2 rounded-lg bg-gold-sand-600 w-max h-max">
                            <img src={x.archivo} id={x.idPublicacion} alt={x.titulo} className=" w-[200px] rounded-lg"/>                    
                        </div>
                        <div className=" hidden max-md:flex flex-col items-center">
                            <h2 className="text-xl font-semibold break-words">{x.titulo}</h2>
                            <p>
                                Likes: {likes}
                            </p>
                        </div>
                    </section>
                    {/* Separador */}                   
                    <span className="bg-yellow-orange-300 self-stretch w-1 mx-2 rounded-lg max-md:hidden"></span>    
                    {/* Para mostrar la informacion */}
                    <article className=' w-[200px] flex flex-col gap-2.5 max-md:hidden'>
                        <h1 className='font-bold text-2xl w-full text-center'>
                            Información:
                        </h1>
                        <div className='flex flex-col gap-1'>
                            <h2 className="text-xl font-semibold break-words">{x.titulo}</h2>
                            <p>{x.descripcion}</p>
                        </div>

                        <div>
                            Likes: {likes}
                        </div>

                    </article>  

                    <span className="bg-yellow-orange-300 self-stretch w-1 mx-2 rounded-lg max-md:hidden"></span>    

                    <section className='h-full max-md:hidden'>
                        <h1 className='font-bold text-2xl w-full text-center'>
                            Categorias:
                        </h1>
                        <div className="p-[10px] bg-vulcan-950 rounded-2xl flex flex-wrap gap-[10px] w-[200px]">
                          {publicaciones && typeof x.categoria === 'string' && x.categoria.split(',').map((categoria, index) =>
                            <p key={index} className="font-bold p-2 border-2 border-gold-sand-500 rounded-lg">{categoria}</p>
                          )}  
                        </div>
                    </section>

                    <span className="bg-yellow-orange-300 self-stretch w-1 mx-2 rounded-lg"></span>
                    <article className='flex flex-col gap-1'>
                        <h1 className='font-bold text-2xl w-full text-center'>
                            Ventas:
                        </h1>
                        <div className='text-lg'>
                            <p>Precio: $ {x.precio} MX</p>
                            <p>PZ vendidas: {ventas[index] ? ventas[index] : 0} pz.</p>
                            <p>Total: $ {total} MX</p>
                        </div>
                    </article>
                </div>  
              )}   
              )}
          </div>
      </div>
    )
}