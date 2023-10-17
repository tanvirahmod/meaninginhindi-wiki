import { getTheSearchResult } from '@/lib/words';
import Link from 'next/link';
import React from 'react'

// generate dynamic metadata-----------------
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {

    return {
        title: `Search Results Page | meaninginhindi.wiki`,
        description: `Search the word you are looking for | meaninginhindi.wiki`,
        alternates: {
            canonical: `https://meaninginhindi.wiki/search`
        },
        openGraph: {
            title: `Search Results Page | meaninginhindi.wiki`,
            description: `Search the word you are looking for | meaninginhindi.wiki`,
            images: 'https://meaninginhindi.wiki/opengraph-image.png'
          },
          robots: {
            index: false,
            follow: false,
          },
    }
}
// dynamic metadata ends here-------------------

export default async function Search({
  // from here(curlybraises) is extra to get the search query only
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
  // to here(curlybraises) is extra to get the search query only
}) {
  // getting search query after /search?q=
  const query: any = searchParams?.q ? searchParams?.q : null
  const fetchedSearchResult: any = await getTheSearchResult(query)
  const test = ((fetchedSearchResult as any[]).length >= 1 ) ? true : false

  return (
    <div className='w-full md:w-3/4 mx-auto h-auto rounded-lg px-10 text-violet-700 flex flex-col gap-2'>

      <h2 className="text-slate-600 md:text-3xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-slate-800 text-center pt-6">English to Hindi Word Meaning</h2>

      <h3 className="md:text-2xl font-semibold text-slate-800 text-center">Better Word Explanation of English Words in Hindi language.</h3>

      <h4 className="text-lg font-semibold text-slate-800 text-center mt-9">Search Result for &apos;{query}&apos;.</h4>

      {test ?
        (fetchedSearchResult?.map((letter: { word: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, index: React.Key | null | undefined) => {
          return <Link className='text-center text-2xl gap-2' key={index} href={`/dictionary/${letter.word}`}>{letter.word} meaning in Hindi</Link>
        })) : (<p className='text-center text-2xl'>The word you are looking for does not exist in our database.</p>)
      }
    </div>
  )
}
