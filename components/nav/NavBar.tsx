"use client"
import { useState } from 'react'
import Link from 'next/link'
export default function NavBar() {
    const [IsOpen, setIsOpen] = useState(false);

    return (
        <nav className='relative'>

            <button onClick={() => setIsOpen((prev: boolean) => !prev)} className='relative rounded-lg p-4 text-slate-600'>
                {!IsOpen && (
                <svg width="38px" height="38px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">

                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                    <g id="SVGRepo_iconCarrier"> <title>Menu</title> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Menu"> <rect id="Rectangle" fillRule="nonzero" x="0" y="0" width="24" height="24"> </rect> <line x1="5" y1="7" x2="19" y2="7" id="Path" stroke="#475569" strokeWidth="2" strokeLinecap="round"> </line> <line x1="5" y1="17" x2="19" y2="17" id="Path" stroke="#475569" strokeWidth="2" strokeLinecap="round"> </line> <line x1="5" y1="12" x2="19" y2="12" id="Path" stroke="#475569" strokeWidth="2" strokeLinecap="round"> </line> </g> </g> </g>

                </svg>
                )}
                {IsOpen && (
                    <svg width="38px" height="38px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#475569" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#475569" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                )}
            </button>

            {IsOpen && (
                <ul className='absolute top-20 bg-slate-100 ring-1 ring-slate-200 p-6 flex flex-col gap-6 shadow-lg right-0 text-slate-600 font-bold w-64 rounded-lg z-10'>
                    <li onClick={() => setIsOpen((prev: boolean) => !prev)} ><Link className='hover:bg-white p-4 rounded-lg active:text-slate-950' href={"/"}>Home</Link></li>
                    <li onClick={() => setIsOpen((prev: boolean) => !prev)}><Link className='hover:bg-white p-4 rounded-lg active:text-slate-950' href={"/dictionary"}>Hindi Meaning</Link></li>

                </ul>
            )}

        </nav>
    )
}
