import { changeFiltro } from "../../../../../Functions/Selects/changeFiltro"
import { ListFiltros } from "../../../../../Lists/ListFiltros"

export const OptionFiltrosComponent = ({ setFiltroSelect, setFiltro, filtroSelect}) => {
  return ListFiltros.map(x => 
    <p key={x.id} 
      onClick={() => changeFiltro(x.label, x.id, setFiltroSelect, setFiltro)} className={`${filtroSelect === x.label ? 'option-tool-select' : 'option-tool'}`}>
        {x.label}
    </p>  
  )
}
