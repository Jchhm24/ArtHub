import { useCallback, useEffect, useRef, useState } from "react"
import {useDropzone} from 'react-dropzone'
import { ListCategorias } from "../../../../Components/Filtros/ListCategorias"
import { useForm } from "../../hooks/useForm"

export const PublicarComponent = ({changePage}) => {
    
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      setBase64Image(reader.result) // Guarda la imagen en base64 en el estado
    }

    reader.readAsDataURL(file)
  }, [])

  const [base64Image, setBase64Image] = useState(null) // Nuevo estado para la imagen en base64
  
  const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({onDrop})

  // Para saber los checks que se seleccionaron
  const [categorias, setCategorias] = useState(
    ListCategorias.reduce((acc, categoria) => {
      acc[categoria.categoria] = false
      return acc
    }, { NSFW: false }) // Agregar NSFW al estado inicial
  )

  // Manejador para el cambio de estado de las categorías
  const handleCategoriaChange = (event) => {
    setCategorias({
      ...categorias,
      [event.target.id]: event.target.checked,
    })
  }

  useEffect(() => {
    ref.current.focus()
}, [])

  const user = JSON.parse(localStorage.getItem('userData'))

  const categoriasSeleccionadas = Object.keys(categorias).filter( categoria => categorias[categoria])

  const publicForm ={
    "idArtista":user.idUsuario,
    "titulo": '',
    "descripcion": '',
    "precio": '',
    "archivo": '',
    "categoria":''
  }

  const {formState, onInputChange, resetForm} = useForm(publicForm)
  const {idArtista, titulo, descripcion, precio, archivo, categoria} = formState

const handleSubmit = async (e) => {
  e.preventDefault()
  if (acceptedFiles[0] && categoriasSeleccionadas.length > 0) {
    const categoriasString = categoriasSeleccionadas.join(', ')

    // Crear una instancia de FormData
    let formData = new FormData()

    // Agregar datos al formData
    formData.append('idArtista', user.idUsuario)
    formData.append('titulo', titulo)
    formData.append('descripcion', descripcion)
    formData.append('precio', precio)
    formData.append('archivo', acceptedFiles[0]) // Agregar el archivo directamente
    formData.append('categoria', categoriasString)

    try {
      const response = await fetch('https://arthub.somee.com/api/Publicacion', {
        credentials: 'include',
        method: 'POST',
        body: formData // Pasar formData como el cuerpo de la solicitud
      })

      if (!response.ok) {
        throw new Error('Error al hacer la publicación')
      }

      await response.json()
      alert('Publicado de exitosamente')
      resetForm()
      changePage('inicio')
    } catch (error) {
      console.log(error)
      alert('Error al hacer la publicación. Por favor intente de nuevo.')
    }
  } else {
    if (!acceptedFiles[0]) {
      alert('No se ha seleccionado una imagen')
    }
    if (categoriasSeleccionadas.length === 0) {
      alert('No se ha seleccionado ninguna categoría')
    }
  }
}

  const ref = useRef()

  return (
    <form onSubmit={handleSubmit} className="mx-[60px] gap-[60px] mt-[30px] flex flex-row items-center place-content-around text-xl">
      {/* Formulario de inputs */}
      <section className="bg-nile-blue-950 flex flex-col gap-5 p-[30px] rounded-xl w-min">
        <input type="text" name="titulo" placeholder="Titulo" className="input-login w-max"
          value={titulo} onChange={onInputChange} required ref={ref}/>
        
        <div className="flex flex-col">
          <textarea cols="30" rows="10" name="descripcion" value={descripcion} maxLength="150" onChange={onInputChange} required
          className="input-login h-[85px] w-max resize-none" placeholder="Descripcion"></textarea>
          <label htmlFor="" className="text-base font-Red-Hat-Display text-yellow-orange-300">
            (Max 150 caracteres)
          </label>
        </div>

        <div className="flex flex-row items-center gap-[5px] font-Comfortaa font-medium text-yellow-orange-300">
          <label htmlFor="">
            Precio: $ 
          </label>
          <input type="number" className="input-login w-[84px]" placeholder="0.00"
            name="precio"  value={precio} onChange={onInputChange} required/>
          <label htmlFor="">M.X</label>
        </div>

        {/* Categorias */}
        <div className="flex flex-col">
          <div className="flex flex-row gap-1 contend-end">
            <label className="font-Red-Hat-Display text-yellow-orange-300">
              Categorias: 
            </label>
            <label className="font-Red-Hat-Display text-yellow-orange-300 font-medium text-[13px]">
              Seleccione una o más categorias
            </label>
          </div>
          <div className="flex flex-wrap gap-[10px] p-[10px] bg-vulcan-950 rounded-lg">
            {ListCategorias.map((x) => (
              <div key={x.id} className="font-Comfortaa font-light text-yellow-orange-300">
                <input
                  type="checkbox"
                  id={x.categoria}
                  className="peer hidden"
                  checked={categorias[x.categoria]}
                  onChange={handleCategoriaChange}
                />
                <label
                  htmlFor={x.categoria}
                  className="cursor-pointer px-2 py-1 border-2 border-gold-sand-500 rounded-lg
                  peer-checked:bg-gold-sand-500"
                >
                  {x.categoria}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1 font-Red-Hat-Display text-yellow-orange-300">
          <div className="flex flex-row gap-1">
            <input
              type="checkbox"
              id="NSFW"
              checked={categorias.NSFW}
              onChange={handleCategoriaChange}
            />
            <label htmlFor="NSFW">
              NSFW
            </label>
          </div>
          <p className="text-base">
            Si su publicacion tiene que ver con algo relacionado a NSFW,
            marque esta casilla de forma obligatoria,de lo contario su 
            publicacion sera rechazada al momento de ser publicado.
          </p>
        </div>

        <div className="flex justify-center">
          <button className="bg-nile-blue-800 py-1 pr-[6px] text-yellow-orange-300 font-Comfortaa font-medium rounded-lg flex flex-row">
              <svg className="fill-yellow-orange-300" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-647 244-451q-12 12-28 11.5T188-452q-11-12-11.5-28t11.5-28l264-264q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l264 264q11 11 11 27.5T772-452q-12 12-28.5 12T715-452L520-647v447q0 17-11.5 28.5T480-160q-17 0-28.5-11.5T440-200v-447Z"/></svg>
              Publicar
          </button>
        </div>
      </section>

      {/* seccion de la imagen en donde se va a subir */}
      <section className="text-yellow-orange-200 font-Comfortaa font-medium">
          {/* Drag and drop */}
          {/* En el div se arrastra la imagen */}
            <div {...getRootProps()} className="rounded-[25px] border-8 border-vulcan-900 h-min">
              <input {...getInputProps()}/>
              {acceptedFiles[0] ?
              // Imagen a renderizar 
                <img src={URL.createObjectURL(acceptedFiles[0])} alt="imagen"
                className="w-full rounded-2xl" name="archivo" value={archivo} onChange={onInputChange}/>
               :isDragActive ?
              //  Mensaje de arrastrar la imagen
                  <p className="py-44 px-[53px]">Drop the files here ...</p> :
                  <div className="flex flex-col items-center gap-2 py-44 px-[53px]">
                    <div className="flex flex-col justify-center items-center">
                      <h2>Elige aqui tu imagen</h2>
                      <p>ó</p>
                      <h2>arrastralo hasta aqui</h2>
                    </div>
                    <svg className="w-20 h-20 fill-yellow-orange-200" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-488v128q0 17 11.5 28.5T480-320q17 0 28.5-11.5T520-360v-128l36 36q11 11 28 11t28-11q11-11 11-28t-11-28L508-612q-12-12-28-12t-28 12L348-508q-11 11-11 28t11 28q11 11 28 11t28-11l36-36Zm40 408q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                  </div>
              }
            </div>
      </section>
    </form>
  )
}
