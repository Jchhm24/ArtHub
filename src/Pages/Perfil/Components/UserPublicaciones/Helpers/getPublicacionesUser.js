export const getPublicacionesUser = async (userId) => {
  try {
    const response = await fetch(`https://arthub.somee.com/api/Publicacion/User/${userId}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error'.error)
  }
}
