"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function SearchBar(props: { place: string, isSingleWordSearch: boolean }) {
    const [searchQuery, setSearchQuery] = useState("")
    const router = useRouter()

    const onSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const encodedSearchQuery = encodeURI(searchQuery.trim().replaceAll(" ","-").toLowerCase());
        const searchType = props.isSingleWordSearch ? `/${encodedSearchQuery}` : `?q=${encodedSearchQuery}`
        router.push(`${props.place}${searchType}`);
    }

    return (
        <form onSubmit={onSearch} className='w-full md:w-3/4 mx-auto h-auto rounded-lg p-4 px-10 flex justify-center'>
            <input onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} className='bg-slate-100 text-slate-600 ring-1 ring-slate-200 focus:ring-1 focus:ring-violet-600 sm:w-2/4 w-3/4 rounded-r-none rounded-md p-3 outline-none' type='search' name='search' placeholder='Search Word'></input>
            <button className='ring-1 ring-violet-600 active:ring rounded-l-none p-3 bg-violet-600 rounded-md text-white' name='search' type='submit' aria-label="search">
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                </svg>
            </button>
        </form>
    )
}

