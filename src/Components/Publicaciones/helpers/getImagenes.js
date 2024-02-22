export const getImagenes = async (ids) => {
    const response = await fetch('https://www.arthub.somee.com/api/Publicacion/')
    let data = await response.json()

    // Filtra las imágenes basándote en las ids(categories) seleccionadas de los checkboxes
    if (ids && ids.length > 0) {
        data = data.filter(imagen => {
            const categorias = imagen.categoria.split(',');
            return categorias.some(categoria => ids.includes(categoria));
        });
    }

    for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
    }

    return data
}