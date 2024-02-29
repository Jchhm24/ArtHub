import { useState } from "react"

export const userForm = (updateUser = {}) => {
  
    const [formState, setFormState] = useState(updateUser)

  const onInputChange = ({target}) => {
      const {name, value} = target
      setFormState({
          ...formState,
          [name]: value,
      })
  }

  return {
    formState,
    onInputChange
  }
}
