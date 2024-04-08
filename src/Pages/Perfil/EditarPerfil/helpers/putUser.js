import { getUpdateUser } from "./getUser";

export const putUser = async (id, formState, user, confirmModal) => {

  const {fotoPerfil, nombre, apellido, username, email, contrasena, idRol} = formState
  const updateUser = new FormData()
  // le añadimos los datos que desestructuramos del formState
  if(user.username !== username || user.email !== email || user.contrasena !== contrasena || user.idRol !== idRol){
    // TODO: Mandar con la contraseña original
    confirmModal(true)
    // !pongo el return para que no se ejecute el codigo de envio de datos
    return
  }else{
    updateUser.append('FotoPerfil', fotoPerfil)
    updateUser.append('Nombre', nombre)
    updateUser.append('Apellido', apellido)
  }

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
