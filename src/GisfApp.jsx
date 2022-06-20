import { useState } from 'react'
/**Componenetes */
import { GifsInput } from './components/GifsInput'
import { GifsList } from './components/GifsList'
import { GifsTitulo } from './components/GifsTitulo'

export const GisfApp = () => {

    /**Obtener categorias */
    const [categorias, setCategorias] = useState(['One piece'])


    const agregarCategoria = (onNewCategoria) => {
        if (categorias.includes(onNewCategoria)) return;
        setCategorias([onNewCategoria, ...categorias])
    }

    return (
        <>
            <div className='p-20 flex flex-col'>
                {/* Titulo */}
                <GifsTitulo
                    titulo={'Gifs-app'}
                />

                {/* Input para buscar la categoria */}
                <GifsInput
                    onNewCategoria={(value) => agregarCategoria(value)}
                />

                {/* Listado de Gifs  */}
                <div className='mt-10'>
                    {categorias.map((cat) => (
                        <GifsList
                            key={cat}
                            categorias={cat}
                        />
                    ))}
                </div>

            </div>
        </>
    )
}
