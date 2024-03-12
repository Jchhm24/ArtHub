import { deletePublicacion } from "../../helper/deletePublicacion"

export const ButtonsOptionComponent = ({setEdit, id, changePage}) => {
  return (
    <div className="flex flex-row gap-2.5">
      <button
        onClick={() => setEdit(true)}
        className="cursor-pointer w-max p-1 font-Comfortaa font-medium flex rounded-lg bg-yellow-orange-300 hover:bg-yellow-orange-400 text-vulcan-950"
      >
        <svg
          className="fill-vulcan-950"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M167-120q-21 5-36.5-10.5T120-167l40-191 198 198-191 40Zm191-40L160-358l458-458q23-23 57-23t57 23l84 84q23 23 23 57t-23 57L358-160Zm317-600L261-346l85 85 414-414-85-85Z" />
        </svg>
        Editar
      </button>

      <button 
        onClick={() => deletePublicacion(id, changePage)}
        className="cursor-pointer w-max p-1 font-Comfortaa font-medium flex rounded-lg bg-yellow-orange-300 hover:bg-yellow-orange-400 text-vulcan-950">
        Eliminar publicacion
      </button>
    </div>
  )
}
