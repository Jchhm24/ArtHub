import { ListTiposImpresion } from '../../../../../Lists/ListTiposImpresion'

export const OptionImpresionComponent = ({setImpresionSelect, impresionSelect}) => {
  return ListTiposImpresion.map(x => 
    <p key={x.id}
      onClick={() => setImpresionSelect(x.label)} className={`${impresionSelect === x.label ? 'option-tool-select' : 'option-tool'}`}>
        {x.label}
    </p>  
  )
}
