
export const getPublicacion = async (id) => {
    const response = await fetch(`https://arthub.somee.com/api/Publicacion/${id}`)
    const data = await response.json()

    return data
}
