export const getUser = async (user) =>{
    fetch('https://arthub.somee.com/api/v1/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => {
        if(res.ok){
            return res.json()
        }else{
            throw new Error('Error al iniciar sesión')
        }
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error(error);
    })
}