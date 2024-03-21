export const getUserById = async (userId) => {
    try {
        const response = await fetch(`https://arthub.somee.com/api/Registro/${userId}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}
