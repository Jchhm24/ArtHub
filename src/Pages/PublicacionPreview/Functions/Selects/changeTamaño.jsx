import { ListTamanos } from "../../Lists/ListTamanos"

export const changeTamaño = (label, id, setTamanoSelect, setTamaño) => {
    setTamanoSelect(label)
    setTamaño(ListTamanos.reduce((acc, x ) => x.id === id ? x.value : acc, ""))
}
