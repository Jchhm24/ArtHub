export const getUpdateUser = async (id, setUserUpdated) => {
    const response = await fetch(`https://arthub.somee.com/api/Registro_Usuario/${id}`)
    const DataUpdate = await response.json()

    localStorage.removeItem('userData');
    localStorage.setItem('userData', JSON.stringify(DataUpdate))
    setUserUpdated(prevState => !prevState) // Actualizar el estado del usuario después de la actualización
}