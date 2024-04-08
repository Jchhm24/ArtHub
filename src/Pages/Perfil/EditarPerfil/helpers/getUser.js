export const getUpdateUser = async (id) => {
    const response = await fetch(`https://arthub.somee.com/api/Registro/${id}`)
    const DataUpdate = await response.json()

    localStorage.setItem('userData', JSON.stringify(DataUpdate))
}