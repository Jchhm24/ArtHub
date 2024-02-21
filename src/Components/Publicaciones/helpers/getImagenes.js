export const getImagenes = async () => {
    
    const response = await fetch('https://www.arthub.somee.com/api/Publicacion/')
    let data = await response.json()
    
    for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
    }

    return data
}