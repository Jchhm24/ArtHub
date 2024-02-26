export const saveUser = async (id) => {
    const user= await fetch(`https://arthub.somee.com/api/Registro_Usuario/${id}`)
    const userdata = await user.json()
    
    localStorage.setItem('userData', JSON.stringify(userdata))
}
