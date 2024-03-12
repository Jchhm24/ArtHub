import { changeMarcos } from "../../../../../Functions/Selects/changeMarcos"
import { ListMarcos } from "../../../../../Lists/ListMarcos"

export const OptionMarcosComponent = ({setMarcoSelect, setMarco,marcoSelect}) => {
    return ListMarcos.map(x => 
      <p key={x.id} 
        onClick={() => changeMarcos(x.label, x.id, setMarcoSelect, setMarco)} className={`${marcoSelect === x.label ? 'option-tool-select' : 'option-tool'}`}>
          {x.label}
      </p>  
    )
}
