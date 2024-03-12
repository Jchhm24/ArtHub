import { deletePublicacion } from "../../helper/deletePublicacion"
import { putPublicacion } from "../../helper/putPublicacion"

export const ButtonsOptionEditComponent = ({setEdit, updatePublicacion, id, changePage}) => {
    return (
      <div className="flex flex-row gap-2.5">
        <button
          onClick={() => putPublicacion(updatePublicacion, id, changePage)}
          className="cursor-pointer w-max p-1 font-Comfortaa font-medium flex rounded-lg bg-yellow-orange-300 hover:bg-yellow-orange-400 text-vulcan-950"  
        >
          Guardar cambios
        </button>
        <button 
          onClick={() => setEdit(false)}
          className="cursor-pointer w-max p-1 font-Comfortaa font-medium flex rounded-lg bg-yellow-orange-300 hover:bg-yellow-orange-400 text-vulcan-950"  
        >
          Cancelar
        </button>

        <button
            onClick={() => deletePublicacion(id, changePage)}
          className="cursor-pointer w-max p-1 font-Comfortaa font-medium flex rounded-lg bg-yellow-orange-300 hover:bg-yellow-orange-400 text-vulcan-950"
        >
          Eliminar publicacion
        </button>
      </div>
    )
}
