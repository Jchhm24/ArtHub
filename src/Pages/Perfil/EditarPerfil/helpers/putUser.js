export const putUser = async (id, updateUser) => {
    fetch(`https://arthub.somee.com/api/Registro_Usuario/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateUser)
  })
  .then(res => {
    if(res.ok){
        alert('Tus datos han sido actualizados')
    }else{
        alert('Error al actualizar los datos')
    }
  })
  .catch(error =>{
    console.log('Error al actualizar usuario', error)
  })
}
