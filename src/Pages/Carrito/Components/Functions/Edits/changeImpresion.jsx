import { ListTiposImpresion } from "../../../../PublicacionPreview/Lists/ListTiposImpresion"

export const changeImpresion = (label, id, setImpresionSelect, setImpresion) => {
    setImpresionSelect(label)
    setImpresion(ListTiposImpresion.reduce((acc, x) => x.id === id ? x.value : acc, {}) )
}
