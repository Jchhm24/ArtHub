export const InfoPublicacionComponent = ({publicacion}) => {
  return (
    <>
      <h1 className="font-bold text-2xl">{publicacion.titulo}</h1>
      <p>{publicacion.descripcion}</p>

      <div className="p-[10px] bg-vulcan-950 rounded-2xl flex flex-wrap gap-[10px]">
        {publicacion && typeof publicacion.categoria === 'string' && publicacion.categoria.split(',').map((categoria, index) => 
          <p key={index} className="font-bold p-2 border-2 border-gold-sand-500 rounded-lg">{categoria}</p>
        )}
      </div>
        
      <h2>Precio: ${publicacion.precio} MX</h2>
    </>
  )
}
