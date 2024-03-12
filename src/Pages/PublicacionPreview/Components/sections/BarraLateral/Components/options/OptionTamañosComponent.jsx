import { changeTamaño } from "../../../../../Functions/Selects/changeTamaño"
import { ListTamanos } from "../../../../../Lists/ListTamanos"

export const OptionTamañosComponent = ({tamanoSelect, setTamanoSelect, setTamaño}) => {
    return ListTamanos.map(x => 
        <p key={x.id}
          onClick={() => changeTamaño(x.label, x.id, setTamanoSelect, setTamaño)} className={`${tamanoSelect === x.label ? 'option-tool-select' : 'option-tool'}`}>
            {x.label}
        </p>  
      )
}
