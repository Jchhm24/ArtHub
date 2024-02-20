import { useState } from "react"
import { LoginModalComponent } from "../LoginModal/LoginModalComponent"

export const NavComponent = () => {

    const [openModal, setOpenModal] = useState(false)

    const stateModal=(state)=>{
        setOpenModal(state)
    }

  return (
    <>
        <nav className="bg-pickled-bluewood-900 font-Comfortaa font-medium text-yellow-orange-300 flex flex-row gap-4 justify-center items-center">
            <img src="img/Logo/logo.svg" className="w-[60px] h-[60px]"/>
    
            {/* Secciín de las categorias */}
            <div>
                <svg className="fill-yellow-orange-300 w-[27px]" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M710-150q-63 0-106.5-43.5T560-300q0-63 43.5-106.5T710-450q63 0 106.5 43.5T860-300q0 63-43.5 106.5T710-150Zm0-80q29 0 49.5-20.5T780-300q0-29-20.5-49.5T710-370q-29 0-49.5 20.5T640-300q0 29 20.5 49.5T710-230Zm-270-30H200q-17 0-28.5-11.5T160-300q0-17 11.5-28.5T200-340h240q17 0 28.5 11.5T480-300q0 17-11.5 28.5T440-260ZM250-510q-63 0-106.5-43.5T100-660q0-63 43.5-106.5T250-810q63 0 106.5 43.5T400-660q0 63-43.5 106.5T250-510Zm0-80q29 0 49.5-20.5T320-660q0-29-20.5-49.5T250-730q-29 0-49.5 20.5T180-660q0 29 20.5 49.5T250-590Zm510-30H520q-17 0-28.5-11.5T480-660q0-17 11.5-28.5T520-700h240q17 0 28.5 11.5T800-660q0 17-11.5 28.5T760-620Zm-50 320ZM250-660Z"/>
                </svg>
            </div>
    
            {/* Barra de busqueda */}
            <div className="flex flex-row items-center h-[38px] w-[550px] bg-pickled-bluewood-950 rounded-2xl">
                <svg className="fill-yellow-orange-300 w-[27px] pl-1" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M380-320q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l224 224q11 11 11 28t-11 28q-11 11-28 11t-28-11L532-372q-30 24-69 38t-83 14Zm0-80q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                </svg>
                <input type="search" id="" placeholder="Buscar..." 
                className="placeholder:text-yellow-orange-300 w-full bg-transparent outline-none pr-2"/>
            </div>
    
            {/* Sección de los botones de navegación el nav */}
            <div className="flex flex-row">
                <button className="flex flex-row items-center bg-yellow-orange-300 text-pickled-bluewood-900 px-2 py-1 rounded-[15px] outline-none">
                    <svg className="fill-pickled-bluewood-900 w-[27px]"  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M240-200h120v-200q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v200h120v-360L480-740 240-560v360Zm-80 0v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H560q-17 0-28.5-11.5T520-160v-200h-80v200q0 17-11.5 28.5T400-120H240q-33 0-56.5-23.5T160-200Zm320-270Z"/>
                    </svg>
                    Inicio
                </button>
                <button className="flex flex-row items-center px-2 py-1 rounded-[15px] outline-none peer">
                    <svg className="fill-yellow-orange-300 w-[27px]" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68-39.5t-2-78.5l54-98-144-304H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h65q11 0 21 6t15 17l27 57Zm134 280h280-280Z"/>
                    </svg>
                    Carrito
                </button>
            </div>
    
            <div className="flex flex-row">
                <button className="py-1 px-2 outline-none" onClick={() => stateModal(true)}>
                    Registrarse
                </button>
                <span className="bg-yellow-orange-300 max-h w-[2px] rounded-full"></span>
                <button className="py-1 px-2 outline-none" onClick={() => stateModal(true)}>
                    Iniciar sesión
                </button>
            </div>
        </nav>

        {openModal && <LoginModalComponent opendModal={openModal} closeModal={() => stateModal(false)}/>}
   </>
  )
}
