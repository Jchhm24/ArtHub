import { ListFiltros } from "../../../../PublicacionPreview/Lists/ListFiltros"

export const changeFiltro = (label, id, setFiltroSelect, setFiltro) => {
    setFiltroSelect(label)
    setFiltro(ListFiltros.reduce((acc ,x ) => x.id === id ? x.value : acc, {}))
}
