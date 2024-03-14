export const postInteraction = async (state, userId, idPublicacion) => {
    // Creamos el objeto de interacción con los valores que se piden en la api
    const interaction = {
        like: state,
        idUsuario: userId,
        idPublicacion: idPublicacion
    }

    try {
        const response = await fetch('https://arthub.somee.com/api/Interaccion',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(interaction)
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.log(error)
    }
}