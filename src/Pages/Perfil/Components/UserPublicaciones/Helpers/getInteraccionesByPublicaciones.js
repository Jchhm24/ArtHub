export const getInteraccionesByPublicaciones = async (idPublicacion) => {
  try {
        const response = await fetch(`https://arthub.somee.com/api/Interaccion/publicacion/${idPublicacion}`)
        const data = await response.json()
        return data
    } catch (error) {
    console.error(error)
  }
}
