import { useState } from 'react'

export const useForm = (publicForm = {}) => {

    const [formState, setFormState] = useState(publicForm)

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    const resetForm = () => {
        setFormState(publicForm);
    }

    return {
      formState,
      onInputChange,
      resetForm
    }
}