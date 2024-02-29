export const getUpdateUser = async (id) => {
    const response = await fetch(`https://arthub.somee.com/api/Registro_Usuario/${id}`)
    const DataUpdate = await response.json()

    localStorage.setItem('userData', JSON.stringify(DataUpdate))
}