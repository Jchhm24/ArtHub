import { ListMarcos } from "../../../../PublicacionPreview/Lists/ListMarcos"

export const changeMarco = (label, id, setMarcoSelect, setMarco) => {
    setMarcoSelect(label)
    setMarco(ListMarcos.reduce((acc, x) => x.id === id ? x.value : acc, {}))
}
