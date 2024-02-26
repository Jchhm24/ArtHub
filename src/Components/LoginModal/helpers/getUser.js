import { saveUser } from "./saveUser"

export const getUser = async (user) => {
    try {
        const response = await fetch('https://arthub.somee.com/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        if (!response.ok) {
            throw new Error('Error al iniciar sesión');
        }
        const data = await response.json();
        saveUser(data)
        return true
    } catch (error) {
        console.error(error);
        alert('Error al iniciar sesión\nEl usuario o la contraseña son incorrectos');
        return false
    }
}