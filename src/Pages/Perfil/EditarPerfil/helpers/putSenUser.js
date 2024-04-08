import { getUpdateUser } from "./getUser"

export const putSenUser =  async (id, formState,passConfirm) => {
    
    const {fotoPerfil, nombre, apellido, username, email, contrasena, idRol} = formState

    const updateUser = new FormData()
    // le añadimos los datos que desestructuramos del formState
    updateUser.append('FotoPerfil', fotoPerfil)
    updateUser.append('Nombre', nombre)
    updateUser.append('Apellido', apellido)
    updateUser.append('Username', username)
    updateUser.append('Email', email)
    updateUser.append('Contrasena', contrasena)
    updateUser.append('idRol', idRol)
    updateUser.append('ContrasenaOriginal', passConfirm)

    try{
        const response = await fetch(`https://arthub.somee.com/api/Registro/${id}`,{
          method: 'PATCH',
          body: updateUser
        })
    
        // Validar si todo esta bien
        if(!response.ok){
          throw new Error('Hubo un error al actualizar el usuario')
        }
    
        // Si el codigo de aqui abajo se ejecuta quiere decir qeu todo salio chido bb
        alert('Usuario actualizado correctamente')
        getUpdateUser(id)
      }catch(error){
        alert('Hubo un error al actualizar el usuario')
        console.log('Errores ocuridos:', error)
      }
}
