import { useInteraccionesByPublicaciones } from '../../../Perfil/Components/UserPublicaciones/Hooks/useInteraccionesByPublicaciones'
import { usePublicacionesUser } from '../../../Perfil/Components/UserPublicaciones/Hooks/usePublicacionesUser'

export const CardDahsboard = () => {

    const publicaciones = usePublicacionesUser()
    const idsPublicaciones = publicaciones.map(x => x.idPublicacion)
    const interacciones = useInteraccionesByPublicaciones(idsPublicaciones)

    console.log(publicaciones)

    return (
      <div>    
          <div className="flex flex-col gap-5 justify-center w-max">
              {publicaciones.map(x => 
                <div key={x.idPublicacion}
                    className=' bg-nile-blue-950 rounded-lg p-2.5 flex flex-row gap-2 justify-center relative font-Red-Hat-Display text-yellow-orange-300 h-min'
                >
                    {/* Para renderizar la imagen */}
                    <section className='flex items-center'>
                        <div className="p-2 rounded-lg bg-gold-sand-600 w-max h-max">
                            <img src={x.archivo} id={x.idPublicacion} alt={x.titulo} className=" w-[200px] rounded-lg"/>                    
                        </div>  
                    </section>
                    {/* Separador */}                   
                    <span className="bg-yellow-orange-300 self-stretch w-1 mx-2 rounded-lg"></span>    
                    {/* Para mostrar la informacion */}
                    <article className=' w-[200px] flex flex-col gap-2.5'>
                        <h1 className='font-bold text-2xl w-full text-center'>
                            Información:
                        </h1>
                        <div className='flex flex-col gap-1'>
                            <h2 className="text-xl font-semibold break-words">{x.titulo}</h2>
                            <p>{x.descripcion}</p>
                        </div>

                        <div>
                            {interacciones && 
                                <p>Likes: {interacciones.reduce((total, y) => y.idPublicacion === x.idPublicacion && y.like === true ? total + 1 : total <= 0 ? 0 : total - 1, 0)} </p>                    
                            }  
                        </div>

                    </article>  

                    <span className="bg-yellow-orange-300 self-stretch w-1 mx-2 rounded-lg"></span>    

                    <section className='h-full'>
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
                    <article className='flex flex-col'>
                        <h1 className='font-bold text-2xl w-full text-center'>
                            Ventas:
                        </h1>
                        <div className='text-lg'>
                            <p>Precio: ${x.precio} MX</p>
                            <p>PZ vendidas: 0 </p>
                            <p>Total: $ 0 MX</p>
                        </div>
                    </article>
                </div>     
              )}
          </div>
      </div>
    )
}