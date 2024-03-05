export const submitUser = async(user, handleClick)=>{
    fetch('https://arthub.somee.com/api/Registro',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => {
        if(res.ok){
            console.log('Cuenta creada con éxito')
            handleClick(true, true)
        }else{
            throw new Error('Error al registrar usuario')
        }
    })
    .then( 
        alert('Cuenta creada con éxito'),
    )
    .catch( error => {
        console.error(error)
    })
}