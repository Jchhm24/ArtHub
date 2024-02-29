export const getPublicaciones = async () => {
  try {
    const response = await fetch('https://arthub.somee.com/api/Publicacion')
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error'.error)
  }
}
