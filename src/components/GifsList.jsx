import { GifsGrid } from './GifsGrid'


export const GifsList = ({ categorias }) => {
    return (
        <>
            <div className='border border-2 px-4 py-3.5 rounded-lg shadow-md mb-3'>

                <div className='text-xl font-bold mb-4'>{categorias}</div>
                <ul className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 '>
                    <GifsGrid
                        categorias={categorias}
                    />
                </ul>
            </div>
        </>
    )
}
