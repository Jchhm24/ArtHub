export const putPublicacion = async (updatePublicacion, id, changePage) => {
    // Validación manual
    for (let key in updatePublicacion) {
        if (updatePublicacion[key] === null || updatePublicacion[key] === '') {
            alert(`El campo ${key} no puede estar vacío`)
            return
        }
    }

    // Unir las categorías en una sola cadena
    if (Array.isArray(updatePublicacion.categoria)) {
        updatePublicacion.categoria = updatePublicacion.categoria.join(',')
    }

    try {
        const response = await fetch(`https://arthub.somee.com/api/Publicacion/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatePublicacion)
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        alert('La información se actualizó correctamente. Sera redirigido a la página de inicio para poder ver los cambios')
        changePage('inicio')
    } catch (error) {
        console.error('Error al enviar el formulario:', error)
        alert('Hubo un error al actualizar la información')
    }
}