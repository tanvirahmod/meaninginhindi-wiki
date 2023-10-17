import React from 'react'
import SearchBar from "@/components/search/SearchBar"

export default function NotFound() {
  return (
    <>
      <SearchBar place="/search" isSingleWordSearch={false} />
      <div className="w-full md:w-3/4 mx-auto h-auto p-8 px-10 flex justify-center flex-col items-center gap-4">
        <h2 className="text-slate-600 md:text-3xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-slate-800">404</h2>
        <h3 className="md:text-2xl font-semibold text-slate-800 text-center">Ops, Page Not Found</h3>

      </div>
    </>
  )
}
