import { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import { imagenes } from '../constant'

export const Loading = ({ cargando }) => {
    return (
        <Transition.Root show={cargando} as={Fragment}>
            <div className='fixed z-10 inset-0 overflow-y-auto'>
                <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-show/40 transition-opacity' />
                    </Transition.Child>

                    {/* esto hace la simulacion del modal */}
                    <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                        enterTo='opacity-100 translate-y-0 sm:scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                        leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                    >
                        <div className='inline-block align-bottom sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
                            <div className='sm:flex sm:items-start justify-center items-center'>
                                {/* <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-100'></div> */}
                                <img src={imagenes.g} alt='G-Network' className='animate-bounce h-32 w-32' />
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </div>
        </Transition.Root>

    )
}

