import { useState } from 'react'
/**Componenetes */
import { GifsInput, GifsList, GifsTitulo } from './components';


export const GisfApp = () => {

    /**Obtener categorias */
    const [categorias, setCategorias] = useState(['One piece'])

    /*Agregar una categoria */
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
