export const FormDatosPersonales = ({nombre, apellido, onInputChange}) => {
  return (
    <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 items-center">
            <label htmlFor="" className="flex flex-col w-max">
                Nombre
                <input type="text" className="input-login"
                name="nombre" onChange={onInputChange} value={nombre}/>
            </label>
            <label htmlFor="" className="flex flex-col w-max">
                    Apellido
                <input type="text" className="input-login"
                name="apellido" onChange={onInputChange} value={apellido}/>
            </label>
        </div>
    </div>
  )
}
