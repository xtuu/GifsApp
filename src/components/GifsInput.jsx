import { SortAscendingIcon, DocumentSearchIcon } from '@heroicons/react/solid'
import { useState } from 'react'


export const GifsInput = ({ onNewCategoria }) => {

    /**Input value */
    const [inputvalue, setInputValue] = useState('')
    const handleChangeInput = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (inputvalue.trim().length <= 1) return;
        // setCategorias(categorias => [{ title: inputvalue }, ...categorias])
        setInputValue('')
        onNewCategoria(inputvalue.trim())
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='mt-4'>

                <div className='mt-1 flex rounded-md shadow-sm'>
                    <div className='relative flex items-stretch flex-grow focus-within:z-10'>
                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                            <DocumentSearchIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
                        </div>
                        <input
                            type='text'
                            placeholder='Buscar Gifs'
                            className='focus:ring-none focus:border-none block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300'
                            value={inputvalue}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <button
                        type='sudmit'
                        className='-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
                    >
                        <SortAscendingIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
                        <span>Buscar</span>
                    </button>
                </div>
            </div>
        </form>
    )
}
