import { ListTamanos } from "../../../../PublicacionPreview/Lists/ListTamanos"

export const changeTamaño = (label, id, setTamañoSelect, setTamano) => {
    setTamañoSelect(label)
    setTamano(ListTamanos.reduce((acc ,x ) => x.id === id ? x.value : acc, {}))
}
