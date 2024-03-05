import { useEffect, useState } from "react"
import { LoginModalComponent } from "../LoginModal/LoginModalComponent"
import { SearchComponent } from "../Search/SearchComponent"
import { CuentaDropwnComponent } from "../CuentaDropdown/CuentaDropwnComponent"

export const NavComponent = ({searchTerm, setSearchTerm, changePage}) => {

    const [openModal, setOpenModal] = useState(false)

    const stateModal=(state)=>{
        setOpenModal(state)
    }
    // Para el dropdown de la cuenta
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [section, setSection] = useState(true)

    // Para cambiar de sección en el nav 
    const sectionChange = (section, page) =>{
        changePage(section)
        setSection(section)
        changePage(page)
    }

    useEffect(() => {
        const userData = localStorage.getItem('userData');
        if (userData) {
            setIsLoggedIn(true);
        }
    }, []);

  return (
    <>  
        <nav className=" font-Comfortaa font-medium text-yellow-orange-300 flex flex-row gap-4 justify-center items-center">
            <img src="img/Logo/logo.svg" className="w-[60px] h-[60px]"/>
    
            {/* Barra de busqueda */}
            <SearchComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    
            {/* Sección de los botones de navegación el nav */}
            <div className="flex flex-row">
                <button onClick={() => sectionChange(true,'inicio')} className={`${section ? 'nav-section-active' : 'nav-section'}`}>
                    <svg  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M240-200h120v-200q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v200h120v-360L480-740 240-560v360Zm-80 0v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H560q-17 0-28.5-11.5T520-160v-200h-80v200q0 17-11.5 28.5T400-120H240q-33 0-56.5-23.5T160-200Zm320-270Z"/>
                    </svg>
                    Inicio
                </button>
                <button onClick={() => sectionChange(false, 'carrito')} className={`${section ? 'nav-section' : 'nav-section-active' }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68-39.5t-2-78.5l54-98-144-304H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h65q11 0 21 6t15 17l27 57Zm134 280h280-280Z"/>
                    </svg>
                    Carrito
                </button>
            </div>

            {isLoggedIn ?
                        <>
                            <button onClick={() => changePage('publicar')} type="button" 
                            className="nav-section-active">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120Zm-40-160H240v60h480v-60Zm-480-60h480v-60H240v60Zm0-140h480v-240H240v240Zm0 200v60-60Zm0-60v-60 60Zm0-140v-240 240Zm0 80v-80 80Zm0 120v-60 60Z"/></svg>     
                                Publicar
                            </button>
                            <CuentaDropwnComponent changePage={changePage}/>
                        </>
                        :<div className="flex flex-row">
                            <button className="py-1 px-2 outline-none" onClick={() => stateModal(true)}>
                                Registrarse
                            </button>
                            <span className="bg-yellow-orange-300 max-h w-[2px] rounded-full"></span>
                            <button className="py-1 px-2 outline-none" onClick={() => stateModal(true)}>
                                Iniciar sesión
                            </button>
                        </div>
            }
        </nav>

        {openModal && <LoginModalComponent opendModal={openModal} closeModal={() => stateModal(false)} setIsLoggedIn={setIsLoggedIn}/>}
   </>
  )
}
