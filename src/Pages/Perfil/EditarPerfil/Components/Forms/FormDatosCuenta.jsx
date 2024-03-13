export const FormDatosCuenta = ({email, username, onInputChange}) => {
  return (
    <div className="flex flex-col items-center gap-5">
        <label htmlFor="" className="flex flex-col">
            Correo
            <input type="email" className="input-login w-min"
            name="email" onChange={onInputChange} value={email}/>
        </label>
        <label htmlFor="" className="flex flex-col">
            username
            <input type="text" className="input-login"
            name="username" onChange={onInputChange} value={username}/>
        </label>
    </div>
  )
}
