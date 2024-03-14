import { useState, useRef, useEffect } from "react"
import { useForm } from "./hooks/useForm"
import { submitUser } from "./helpers/submitUser"
import { useGetForm } from "./hooks/userGetForm"
import { getUser } from "./helpers/getUser"

export const LoginModalComponent = ({opendModal, openSesion, closeModal, setIsLoggedIn}) => {
    
    const focusRef = useRef()
    const focusRef2 = useRef()

    const [isMoved, setIsMoved] = useState(false)

    const handleClick = (direction) => {
        setIsMoved(direction);
    };

    // Datos para enviar al usuario a la API
    const initialForm = {
        fotoPerfil:'',
        nombre: '',
        apellido: '',
        username: '',
        
        fechaNacimiento: '',
        email: '',
        contrasena: '',
        idRol: 1
    }

    const initialFormLogin = {
        correoUsername: '',
        password: ''
    }

    // Para el formulario de registro
    const {formState, onInputChange, resetForm} =useForm(initialForm)
    const {nombre, apellido, username, fechaNacimiento, email,contrasena } = formState

    // Para el formulario de iniciar sesión
    const {formStateLogin, ChangeInput, resetForm2} = useGetForm(initialFormLogin)
    const {correoUsername, password} = formStateLogin

    const onSubmitUser =(event)=>{
        event.preventDefault()
        // Enviamos los datos a la API
        submitUser(formState, handleClick)
        .then(() => {
            resetForm();
        })
    }    

    const onGetUser = async (event) => {
        event.preventDefault();
        console.log(formStateLogin);

        const isLoggedIn = await getUser(formStateLogin);

        if (isLoggedIn) {
            resetForm2();
            closeModal();
            drop(true);
            setIsLoggedIn(true);
        }
    }

    const drop = (x) =>{
        return x
    }

    useEffect(() => {
        focusRef.current.focus()
        openSesion && setIsMoved(true)
    }, [])

  return (
    <>  
        <div className="h-screen w-full -translate-y-[60PX] bg-black/70 absolute z-20 backdrop-blur"></div>
        <dialog open={opendModal} className='bg-nile-blue-950 rounded-[20px] w-[1110px] h-[550px] backdrop-blur-[50px] outline-none
        flex flex-row items-center place-content-evenly z-30 absolute inset-0'>
            {/* Formulario del registro */}
            <section className="w-[555px] flex justify-center">
                <div className="p-5 w-max h-[497px] flex flex-col items-center justify-center gap-5">
                    <h1 className="font-Red-Hat-Display font-semibold text-[32px] text-yellow-orange-300 pb-[10px] border-b-4 border-yellow-orange-300 w-full text-center">
                            Registrarse
                    </h1>
                    {/* Opciones del modal */}
                    <div className="flex flex-row gap-16 font-Comfortaa font-medium text-yellow-orange-300">
                        <button className="text-java-400 flex flex-row bg-nile-blue-900 rounded-[10px] px-[6px] py-1 outline-none" onClick={closeModal}>
                            <svg className="fill-yellow-orange-300" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                <path d="M280-240q-17 0-28.5-11.5T240-280v-400q0-17 11.5-28.5T280-720q17 0 28.5 11.5T320-680v400q0 17-11.5 28.5T280-240Zm272-240 156 156q11 11 11 28t-11 28q-11 11-28 11t-28-11L468-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q11 11 11 28t-11 28L552-480Z"/>
                            </svg>
                            Regresar
                        </button>
                        <button className="text-java-400 flex flex-row bg-nile-blue-900 rounded-[10px] px-[6px] py-1 outline-none"
                            onClick={() => handleClick(true)}>
                            Iniciar sesion
                            <svg className="fill-yellow-orange-300 rotate-180" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                <path d="M280-240q-17 0-28.5-11.5T240-280v-400q0-17 11.5-28.5T280-720q17 0 28.5 11.5T320-680v400q0 17-11.5 28.5T280-240Zm272-240 156 156q11 11 11 28t-11 28q-11 11-28 11t-28-11L468-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q11 11 11 28t-11 28L552-480Z"/>
                            </svg>
                        </button>
                    </div>
                    {/* <!-- formulario de registro --> */}
                    <form className="flex flex-col gap-5" onSubmit={onSubmitUser}>
                        <div className="flex flex-row gap-5">
                            <input ref={focusRef} type="text"placeholder="Nombre..." id="nombre" required className="w-[150px] input-login" 
                            name="nombre" value={nombre} onChange={onInputChange}/>

                            <input type="text" placeholder="Apellido..." id="apellido" required className="w-[150px] input-login"
                            name="apellido" value={apellido} onChange={onInputChange}/>
                        </div>
                        <input type="date" className="input-login" name="fechaNacimiento"  required value={fechaNacimiento} onChange={onInputChange}/>
                        <input type="text" className="input-login" placeholder="Nombre de usuario..." required name="username" value={username} onChange={onInputChange}/>
                        <input type="email" className="input-login " placeholder="Correo electronico..." required  name="email" value={email} onChange={onInputChange}/>
                        <input type="password" className="input-login" placeholder="Contraseña..." required name="contrasena" value={contrasena}onChange={onInputChange}/>
                        {/* <!-- Boton para poder enviar lo datos --> */}
                        <div className="flex justify-center">
                            <button type="submit" className="font-Comfortaa text-vulcan-950 bg-yellow-orange-300 px-[6px] py-1 rounded-lg
                                hover:text-vulcan-900 hover:bg-gold-sand-300 transition-all duration-500">
                                ¡Registrarse!
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <div className={`bg-vulcan-950 rounded-[20px] w-[555px] h-full absolute flex justify-center items-center z-10 ${isMoved ? '-translate-x-2/4 transition duration-500' : 'translate-x-2/4 transition duration-500'}`}>
                <div className="flex flex-col items-center">
                    <h1 className="font-Red-Hat-Display font-bold text-5xl text-yellow-orange-300 px-[10px] pb-[6px] border-b-4 border-yellow-orange-300">
                        {isMoved ? "¡Bienvenido!" : "¡Registrate!"}
                    </h1>
                    <img className="w-[148px] h-[148px]" src="/img/Logo/logo.svg"/>
                </div>
           
            </div>

            {/* Formulario de iniciar sesión */}
            <section className="w-[555px] flex justify-center">
                <div className=" p-5 h-[497px] flex flex-col items-center justify-center gap-5">
                    <h1 className="font-Red-Hat-Display font-semibold text-[32px] text-yellow-orange-300 pb-[10px] border-b-4 border-yellow-orange-300 w-full text-center">
                        Iniciar sesión
                    </h1>
                    {/* Opciones del modal */}
                    <div className="flex flex-row gap-14 font-Comfortaa font-medium text-yellow-orange-300">
                        <button
                        className="text-java-400 flex flex-row bg-nile-blue-900 rounded-[10px] px-[6px] py-1 outline-none"
                        onClick={() => handleClick(false)}>
                            <svg className="fill-yellow-orange-300" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                <path d="M280-240q-17 0-28.5-11.5T240-280v-400q0-17 11.5-28.5T280-720q17 0 28.5 11.5T320-680v400q0 17-11.5 28.5T280-240Zm272-240 156 156q11 11 11 28t-11 28q-11 11-28 11t-28-11L468-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q11 11 11 28t-11 28L552-480Z"/>
                            </svg>
                            Registrarse
                        </button>
                        <button className="text-java-400 flex flex-row bg-nile-blue-900 rounded-[10px] px-[6px] py-1 outline-none" onClick={closeModal}>
                            Regresar
                            <svg className="fill-yellow-orange-300 rotate-180" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                <path d="M280-240q-17 0-28.5-11.5T240-280v-400q0-17 11.5-28.5T280-720q17 0 28.5 11.5T320-680v400q0 17-11.5 28.5T280-240Zm272-240 156 156q11 11 11 28t-11 28q-11 11-28 11t-28-11L468-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q11 11 11 28t-11 28L552-480Z"/>
                            </svg>
                        </button>
                    </div>
                    {/* <!-- formulario de inciar sesion --> */}
                    <form className="flex flex-col gap-5 w-full" onSubmit={onGetUser}>
                        <input ref={focusRef2}  type="text" className="input-login" placeholder="Usuario/Correo electronico..." name="correoUsername" required value={correoUsername} onChange={ChangeInput}/>
                        <input type="password" className="input-login" placeholder="Contraseña..." required name="password" value={password} onChange={ChangeInput}/>
                        {/* opciones del usuario */}
                        <div className="flex flex-col items-center justify-center gap-5 font-Red-Hat-Display text-yellow-orange-300">
                            <div className="flex gap-1">
                                <a href="#" className="hover:text-gold-sand-400 hover:underline">
                                    ¿Olvidaste tu usuario?  
                                </a>
                            </div>

                            <div className="flex gap-1">
                                <a href="#" className="hover:text-gold-sand-400 hover:underline">
                                    ¿Olvidaste tu contraseña?  
                                </a>
                            </div>
                        </div>
                        {/*Boton para poder enviar lo dato*/}
                        <div className="flex justify-center">
                            <button type="submit" className="font-Comfortaa text-vulan-950 bg-yellow-orange-300 px-[6px] py-1 rounded-[10px]
                                hover:text-vulcan-900 hover:bg-gold-sand-300  transition-all duration-500">
                                ¡Iniciar sesion!
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </dialog>
    </>
  )
}