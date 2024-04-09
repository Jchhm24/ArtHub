export const FormFotoPerfil = ({fotoPerfil, onInputChange}) => {
  
  const handleImageChange = (event) => {
    const file = event.target.files[0]
    onInputChange({ target: { name: 'fotoPerfil', value: file } })
  }

  const imageUrl = typeof fotoPerfil === 'string' ? fotoPerfil : URL.createObjectURL(fotoPerfil)

  return (
    <div className='flex flex-row gap-5'>
      <img src={imageUrl} alt="fotoperfil" className='rounded-full w-[132px] h-[132px]'/>
      {/* Parte para cambiar la imagen */}
      <input id="file-upload" type="file" accept="image/*" onChange={handleImageChange} className='peer hidden' />
      <label htmlFor="file-upload" className="cursor-pointer flex flex-row rounded-lg bg-yellow-orange-300 h-min p-2 
                  text-vulcan-950 font-Comfortaa font-medium text-base peer-active:bg-yellow-orange-400 w-max">
        Cambiar imagen
      </label>
    </div>
  )
}