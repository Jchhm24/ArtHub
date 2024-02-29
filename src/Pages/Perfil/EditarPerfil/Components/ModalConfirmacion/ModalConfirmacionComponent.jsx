import { useForm } from "../../../../Publicar/hooks/useForm"

export const ModalConfirmacionComponent = ({openModal, closeModal, confirm}) => {

    const verificar = (e) =>{
        e.preventDefault()

        if(formState.pass === user.contrasena){
            confirm(true)
            resetForm()
            closeModal()
        }else{
            alert('La contraseña es incorrecta')
        }
    }
    
    const user = JSON.parse(localStorage.getItem('userData'))
    const {formState, onInputChange, resetForm} = useForm({pass: ''})
    const {pass} = formState
    return (
      <>
          <div className="h-screen w-full bg-black/70 -translate-y-[408px] absolute z-20 backdrop-blur"></div>
          <dialog open={openModal} className="z-30 p-5 flex flex-col items-center gap-5 rounded-lg bg-vulcan-950
              text-yellow-orange-300 font-Red-Hat-Display top-0 bottom-0">
              <h2 className="text-2xl font-bold">¿Estas seguro/a?</h2>

              <p>
                  Si estas segura de que los datos que pusistem son los correctos <br />
                  escriba su contraseña para confirmar los cambios y presione confirmar, <br />
                  en caso contrario presione cancelar.
              </p>

              <form onSubmit={verificar} action=""className="flex flex-col gap-5 items-center">
                  <input type="password" placeholder="Escribe tu contraseña..." 
                          className="input-login w-[14rem]" name="pass" value={pass} onChange={onInputChange}/>
                  <button className="bg-yellow-orange-300 text-vulcan-950 font-Comfortaa font-medium rounded-lg p-2 w-max hover:bg-yellow-orange-400 hover:text-vulcan-700">
                      Confirmar
                  </button>
              </form>
              <button onClick={closeModal} className="rounded-lg p-2 bg-gold-sand-600 hover:bg-gold-sand-800 
                  text-nile-blue-950 font-Comfortaa font-bold">
                  Cancelar
              </button>
          </dialog>
      </>
    )
}
