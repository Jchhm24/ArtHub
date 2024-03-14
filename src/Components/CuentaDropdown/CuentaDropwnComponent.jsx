import { useEffect } from "react"
import { useState, useRef } from "react"

export const CuentaDropwnComponent = ({changePage}) => {

    const exit = () => {
        localStorage.removeItem('userData')
        window.location.reload()
    }    

    const [isOpen, setisOpen] = useState(false)
    const ref = useRef(null)

    const handleClickOutside = (event) =>{
        if(ref.current && !ref.current.contains(event.target)){
            setisOpen(false)
        }
    }

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside)
    
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [])
    
    // La idea de la funcion es que si se da click en alguna de las opciones del dropdown se cierre el dropdown
    const enterSection = (page) => {
        changePage(page)
        setisOpen(false)
    }

    return (
      <div ref={ref}>   
          {/* Icono del perfil */}
        <button 
            onClick={() => setisOpen(!isOpen)}
            className={`pr-5 flex flex-row items-center gap-[5px] rounded-full ${isOpen ? 'bg-yellow-orange-300' : 'hover:bg-vulcan-900'}`}>
              <div className="bg-white rounded-full">
                  <svg className="fill-vulcan-900 w-10 h-10" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
              </div>
            <svg className={`w-[30px] h-[30px] ${isOpen ? 'fill-vulcan-900 rotate-180' : 'fill-yellow-orange-300'}`} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-362q-8 0-15-2.5t-13-8.5L268-557q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-373q-6 6-13 8.5t-15 2.5Z"/></svg>          
        </button>

          <div className={`z-10 absolute flex-col items-center gap-0 -translate-x-6 ${isOpen ? 'flex' : 'hidden'}`}>
              <div className="rotate-[225deg] w-0 h-0 border-solid border-l-8 border-t-8 border-r-8 border-b-0 border-transparent border-b-transparent border-r-vulcan-900 translate-y-2"></div>
              <div className="bg-vulcan-900 rounded-lg">
                <button onClick={() => enterSection('perfil')} className="dropdownPerfil">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Z"/></svg>
                    Perfil
                </button>
                <button onClick={() => enterSection('dashboard')} className="dropdownPerfil">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M486-314q33 0 56.5-15.5T566-378q0-29-24.5-47T454-466q-59-21-86.5-50T340-592q0-41 28.5-74.5T446-710v-15q0-14 10.5-24.5T481-760q14 0 24.5 10.5T516-725v15q29 2 53.5 19.5T609-648q7 11 1 23.5T590-607q-13 5-26 1t-21-15q-10-12-25-19.5t-36-7.5q-35 0-53.5 15T410-592q0 26 23 41t83 35q72 26 96 61t24 77q0 29-10 51t-26.5 37.5Q583-274 561-264.5T514-250v15q0 14-10.5 24.5T479-200q-14 0-24.5-10.5T444-235v-17q-38-8-65-30t-43-56q-6-14 .5-27t20.5-18q13-5 26 .5t20 17.5q14 26 35.5 38.5T486-314Zm-6 274q-112 0-206-51T120-227v67q0 17-11.5 28.5T80-120q-17 0-28.5-11.5T40-160v-160q0-17 11.5-28.5T80-360h160q17 0 28.5 11.5T280-320q0 17-11.5 28.5T240-280h-59q48 72 126.5 116T480-120q141 0 242.5-94T838-445q2-16 14-25.5t28-9.5q17 0 29 10.5t10 25.5q-7 85-44 158.5t-96 128q-59 54.5-135.5 86T480-40Zm0-800q-141 0-242.5 94T122-515q-2 16-14 25.5T80-480q-17 0-29-10.5T41-516q7-85 44-158.5t96-128q59-54.5 135.5-86T480-920q112 0 206 51t154 136v-67q0-17 11.5-28.5T880-840q17 0 28.5 11.5T920-800v160q0 17-11.5 28.5T880-600H720q-17 0-28.5-11.5T680-640q0-17 11.5-28.5T720-680h59q-48-72-126.5-116T480-840Z"/></svg>
                    Dashboard                  
                </button>
                <button className="dropdownPerfil">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-240v-436L98-810q-7-15-1-30.5t21-22.5q15-7 30.5-1.5T171-844l77 166h464l77-166q7-15 22.5-21t30.5 2q15 7 21 22.5t-1 30.5l-62 134v436q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Zm240-200h160q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520H400q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440ZM240-240h480v-358H240v358Zm0 0v-358 358Z"/></svg>
                    Ordenes
                </button>

                <button onClick={exit} className="dropdownPerfil">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m780-523-56 55q-11 11-27.5 11.5T668-468q-11-11-11-28t11-28l55-56-55-55q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l55 55 55-56q11-12 27.5-12t28.5 12q12 12 12 28.5T891-635l-55 55 56 56q12 12 11.5 28T891-468q-12 11-28 11.5T835-468l-55-55Zm-420 43q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-240v-32q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v32q0 33-23.5 56.5T600-160H120q-33 0-56.5-23.5T40-240Z"/></svg>
                    Cerrar sesion
                </button>
              </div>
          </div>
      </div>
    )
}
