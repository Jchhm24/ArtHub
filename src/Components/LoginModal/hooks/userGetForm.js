import { useState } from 'react'

export const useGetForm = (initialFormLogin = {}) => {

    const [formStateLogin, setFormStateLogin] = useState(initialFormLogin)

    const ChangeInput = ({target}) => {
        const {name, value} = target
        setFormStateLogin({
            ...formStateLogin,
            [name]: value,
        })
    }

    const resetForm2 = () => {
        setFormStateLogin(initialFormLogin);
    }

    return {
      formStateLogin,
      ChangeInput,
      resetForm2
    }
}