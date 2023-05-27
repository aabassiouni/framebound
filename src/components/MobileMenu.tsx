'use client'

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { useEffect } from 'react'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    function onClose() {
        setIsOpen(false)
    }

    return (
        <>
            <button
                onClick={() => {
                    setIsOpen(true)
                }}
                className="border border-black p-1 text-sm font-medium sm:hidden"
            >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </button>
            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-32">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                            <div className="flex items-center justify-between p-4">
                                                <p className={`self-center font-sans text-3xl font-black sm:text-3xl`}>
                                                    framebound
                                                </p>
                                                <div className="">
                                                    <button
                                                        type="button"
                                                        className="text-3xl"
                                                        onClick={() => onClose()}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <svg
                                                            width="15"
                                                            height="15"
                                                            viewBox="0 0 15 15"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                                                                fill="black"
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                            ></path>
                                                        </svg>
                                                        {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="py- flex-1 overflow-y-auto px-4 sm:px-6">
                                                <div className="space-y-5 py-6">
                                                    <Link
                                                        href="/"
                                                        onClick={onClose}
                                                        className="-mx-3 block rounded-lg px-3 py-2 text-center  font-sans text-3xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        <span className='border border-black p-1'>Home</span> 
                                                    </Link>
                                                    <Link
                                                        href="/shop"
                                                        onClick={onClose}
                                                        className="-mx-3 block rounded-lg px-3 py-2 text-center  text-3xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                         <span className='border border-black p-1 '>Shop</span> 
                                                    </Link>
                                                    <Link
                                                        href="/about"
                                                        onClick={onClose}
                                                        className="-mx-3 block rounded-lg px-3 py-2 text-center text-3xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                         <span className='border border-black p-1 '>About</span> 
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export default MobileMenu
