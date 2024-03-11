import { ListMarcos } from "../../Lists/ListMarcos"

export const changeMarcos = (label, id, setMarcoSelect, setMarco) => {
    setMarcoSelect(label)
    setMarco(ListMarcos.reduce((acc, x) => x.id === id ? x.value : acc, ""))
}
