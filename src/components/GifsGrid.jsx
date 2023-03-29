import { useFethGifs } from '../hooks'


export const GifsGrid = ({ categorias }) => {

    const { imagenes, loading } = useFethGifs(categorias)

    return (
        <>
            {imagenes.map((gifs) => (
                <li key={gifs.id} className='relative'>
                    <div className='group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden'>
                        <img src={gifs.source} alt='Gifs' className='object-cover pointer-events-none group-hover:opacity-75' />
                        <button type='button' className='absolute inset-0 focus:outline-none'>
                            <span className='sr-only'>View details for {gifs.title}</span>
                        </button>
                    </div>
                    {/* <p className='mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none'>{gifs.title}</p>
                    <p className='block text-sm font-medium text-gray-500 pointer-events-none'>{gifs.size}</p> */}
                </li>
            ))}
        </>
    )
}
