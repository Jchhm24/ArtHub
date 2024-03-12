export const deletePublicacion = async (id, changePage) => {
    try {
        const response = await fetch(`https://arthub.somee.com/api/Publicacion/${id}`, {
            method: 'DELETE',
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        alert('La publicación se eliminó correctamente')
        changePage('inicio')
    } catch (error) {
        console.error('Error al eliminar la publicación:', error)
        alert('Hubo un error al eliminar la publicación')
    }
}