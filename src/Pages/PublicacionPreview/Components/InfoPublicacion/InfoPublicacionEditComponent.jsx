import { useState } from 'react'
import { ListCategorias } from '../../../../Components/Filtros/ListCategorias'
import { ButtonsOptionEditComponent } from '../sections/ButtonsOptionEditComponent'

export const InfoPublicacionEditComponent = ({publicacion, setEdit, id, changePage}) => {

    const [updatePublicacion, setUpdatePublicacion] = useState({
        "idArtista":publicacion.idArtista,
        "titulo": publicacion.titulo,
        "descripcion": publicacion.descripcion,
        "precio": publicacion.precio,
        "archivo": publicacion.archivo,
        "categoria":publicacion.categoria.split(',').map(categoria => categoria.trim())
    })

    const {titulo, descripcion, precio, categoria} = updatePublicacion

    const onInputChange = (event) => {
        const {name, value} = event.target
        setUpdatePublicacion(prevState => ({...prevState, [name]: value}))
    }

    const handleCheckboxChange = (event) => {
        const {value, checked} = event.target
        if (checked) {
            setUpdatePublicacion(prevState => ({
                ...prevState,
                categoria: [...prevState.categoria, value]
            }))
        } else {
            setUpdatePublicacion(prevState => ({
                ...prevState,
                categoria: prevState.categoria.filter(categoria => categoria !== value)
            }))
        }
    }

    return (
        <>
            <input type="text" name="titulo" value={titulo} onChange={onInputChange} className="input-login w-max"/>
            <div className="flex flex-col">
              <textarea cols="30" rows="10" name="descripcion" maxLength="150" value={descripcion} onChange={onInputChange}
              className="input-login h-[85px] w-full resize-none" placeholder="Descripcion"></textarea>
              <label htmlFor="" className="text-base font-Red-Hat-Display text-yellow-orange-300">
                (Max 150 caracteres)
              </label>
            </div>

            <div className="flex flex-wrap gap-[10px] p-[10px] bg-vulcan-950 rounded-lg">
                {ListCategorias.map((x) => (
                    <div key={x.id} className="font-Comfortaa font-light text-yellow-orange-300">
                        <input
                            type="checkbox"
                            id={x.categoria}
                            value={x.categoria}
                            className="peer hidden"
                            checked={categoria.includes(x.categoria)}
                            onChange={handleCheckboxChange}
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

            <div className="flex flex-row items-center gap-[5px] font-Comfortaa font-medium text-yellow-orange-300">
              <label htmlFor="">
                Precio: $ 
              </label>
              <input type="number" className="input-login w-[84px]" placeholder="0.00"
                name="precio"  value={precio} onChange={onInputChange} />
              <label htmlFor="">M.X</label>
            </div>

            <ButtonsOptionEditComponent setEdit={setEdit} updatePublicacion={updatePublicacion} id={id} changePage={changePage}/>   
        </>
    )
}