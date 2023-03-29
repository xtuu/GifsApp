import { useEffect, useState } from 'react'
import { getGifs } from '../helpers'


export const useFethGifs = (categorias) => {

    const [imagenes, setImagenes] = useState([])
    const [loading, setLoading] = useState(true)

    const getImagenes = async () => {
        const newImagenes = await getGifs(categorias)
        setImagenes(newImagenes)
        setLoading(false)
    }

    useEffect(() => {
        getImagenes()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return {
        imagenes,
        loading
    }

}
