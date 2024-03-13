import { useState } from "react"
import { userForm } from "../../hooks/userForm"
import { ModalConfirmacionComponent } from "../ModalConfirmacion/ModalConfirmacionComponent"
import { putUser } from "../../helpers/putUser"
import { getUpdateUser } from "../../helpers/getUser"
import { FormDatosPersonales } from "../Forms/FormDatosPersonales"
import { FormDatosCuenta } from "../Forms/FormDatosCuenta"
import { FormFotoPerfil } from "../Forms/FormFotoPerfil"

export const BarSideSections = ({changeSection}) => {

    const [titulo, setTitulo] = useState('Datos personales')

    const [formSection, setformSection] = useState('personales')

    const changeSectionForm = (title, section) => {
        setTitulo(title)
        setformSection(section)
    }

    // Abrir modal 
    const [modal, setModal] = useState(false)
    // para enviar los datos 
    const [pass, setPass] = useState()

    const confirmModal = (state) => {
        setModal(state)
    } 

    const user = JSON.parse(localStorage.getItem('userData'))

    const id = user.idUsuario

    let fechaParaHTML = new Date(user.fechaNacimiento).toISOString().split('T')[0]

    const Confirm = async (pass) =>{
        setPass(pass)
        if(pass){
            let dataToSend = {...formState, fechaNacimiento: new Date(formState.fechaNacimiento).toISOString()};
            await putUser(id, dataToSend)
            await getUpdateUser(id)
            console.log(localStorage.getItem('userData'))
        }
    }

    const SubmitUser = (e) => {
        e.preventDefault()
        confirmModal(true)
    }

    const updateUser ={
      "fotoPerfil": user.fotoPerfil, 
      "nombre": user.nombre,
      "apellido": user.apellido,
      "username": user.username,
      "fechaNacimiento": fechaParaHTML,
      "email": user.email,
      "contrasena": user.contrasena,
      "idRol": 1
    }

    const {formState, onInputChange} = userForm(updateUser)
    const {fotoPerfil,nombre, apellido, username, fechaNacimiento,email, contrasena, idRol} = formState

    return (
      <>  
        <div className="w-full p-5 flex justify-center flex-row gap-5">
          {/* BarSide */}
            <nav className="rounded-lg bg-nile-blue-950 p-2 h-min">
              <div className="flex flex-col gap-3">
                  <button onClick={() => changeSection('perfil')} className="SlideBar-button">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m272-440 116 116q11 11 11 28t-11 28q-11 11-28 11t-28-11L148-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q11 11 11 28t-11 28L272-520h528q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H272Z"/></svg>
                      Regresar
                  </button>
                  <button onClick={() => changeSectionForm('Datos personales', 'personales')}
                    className={`${formSection === "personales" ? 'SlideBar-button-active' : 'SlideBar-button'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
                      Datos personales
                  </button>
                  <button onClick={() => changeSectionForm('Datos de cuenta', 'cuenta')}
                    className={`${formSection === "cuenta" ? 'SlideBar-button-active' : 'SlideBar-button'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M680-280q25 0 42.5-17.5T740-340q0-25-17.5-42.5T680-400q-25 0-42.5 17.5T620-340q0 25 17.5 42.5T680-280Zm0 120q31 0 57-14.5t42-38.5q-22-13-47-20t-52-7q-27 0-52 7t-47 20q16 24 42 38.5t57 14.5ZM480-80q-139-35-229.5-159.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v172q-19-8-39-14.5t-41-9.5v-147l-240-90-240 90v188q0 47 12.5 94t35 89.5Q310-290 342-254t71 60q11 32 29 61t41 52q-1 0-1.5.5t-1.5.5Zm200 0q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM480-494Z"/></svg>
                      Datos de cuenta
                  </button>
                  <button onClick={() => changeSectionForm('Foto de perfil', 'foto')}
                    className={`${formSection === "foto" ? 'SlideBar-button-active' : 'SlideBar-button'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z"/></svg>                      
                    Foto perfil
                  </button>
              </div>
            </nav>
            
            {/* Titulos de indicación de la sección del usuarios */}
            <div className="flex flex-col gap-5 w-max">
                <div className="h-max rounded-lg bg-nile-blue-950 text-center">
                  <h2 className="text-yellow-orange-300 font-Red-Hat-Display font-bold text-4xl p-4">
                      {titulo}
                  </h2>
                </div>
                {/* forms, el forms apesar de que no se muestra por secciones,siempre se envia todo */}
                <form onSubmit={SubmitUser} className="rounded-lg bg-nile-blue-950 p-5 text-yellow-orange-300 flex flex-col justify-center gap-5">
                    {/* Formulario de datos de datos personales, datos cuenta y cambiar todo de perfil */}
                    {formSection === 'personales' && <FormDatosPersonales nombre={nombre} apellido={apellido} fechaNacimiento={fechaNacimiento} onInputChange={onInputChange}/>
                    || formSection === 'cuenta' && <FormDatosCuenta email={email} username={username} onInputChange={onInputChange}/>
                    || formSection === 'foto' && <FormFotoPerfil fotoPerfil={fotoPerfil}/>
                    }                  
                    <div className="flex justify-center ">
                        <button className="SlideBar-button">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m382-354 339-339q12-12 28.5-12t28.5 12q12 12 12 28.5T778-636L410-268q-12 12-28 12t-28-12L182-440q-12-12-11.5-28.5T183-497q12-12 28.5-12t28.5 12l142 143Z"/></svg>
                            Listo
                        </button>
                    </div>
                </form>
            </div>
        </div>

        {modal && <ModalConfirmacionComponent openModal={modal} closeModal={() => setModal(false)} confirm={Confirm}/>}
      </>
    )
}
