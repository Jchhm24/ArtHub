import { useEffect, useState } from "react"
import { getInteraccionesByPublicaciones } from "../Helpers/getInteraccionesByPublicaciones"

export const useInteraccionesByPublicaciones = (idsPublicaciones) => {
    const [interaciones, setiInteraciones] = useState([])

    useEffect(() => {
        const fetchInteracciones = async () => {
            const data = [];
            for (let i = 0; i < idsPublicaciones.length; i++) {
                const interaccionesPublicacion = await getInteraccionesByPublicaciones(idsPublicaciones[i]);
                data.push(...interaccionesPublicacion);
            }
            setiInteraciones(data);
        }

        fetchInteracciones()
    }, [idsPublicaciones])
    
    return interaciones
}