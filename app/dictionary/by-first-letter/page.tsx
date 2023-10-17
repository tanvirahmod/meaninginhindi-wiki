import Link from 'next/link';
import React from 'react'

// generate dynamic metadata-----------------
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {

    return {
        title: `Browse the word by first letter | meaninginhindi.wiki`,
        description: `Better Word Explanation of English Words in German language. Browse the word by first letter | meaninginhindi.wiki`,
        alternates: {
            canonical: `https://meaninginhindi.wiki/dictionary/by-first-letter`
        },
        openGraph: {
            title: `Browse the word by first letter | meaninginhindi.wiki`,
            description: `Better Word Explanation of English Words in German language. Browse the word by first letter | meaninginhindi.wiki`,
            images: 'https://meaninginhindi.wiki/opengraph-image.png'
          },
    }
}
// dynamic metadata ends here-------------------



export default function ByFirstLetter() {
    // 1st letter word search dictionary
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const listItems = letters.map((letter) => (
        <div className='h-10 w-10 shadow-xl ring-1 ring-slate-200 flex justify-center items-center text-violet-700 font-bold' key={letter}>
            <Link href={`/dictionary/by-first-letter/${letter}`}>{letter}</Link>
        </div>
    ));
    return (

        <div className="w-full lg:w-2/3 mx-auto h-screen p-8 px-10 flex flex-col gap-4">

            <h2 className="text-slate-600 md:text-3xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-slate-800 text-center">English to German Word Meaning</h2>

            <h3 className="md:text-2xl font-semibold text-slate-800 text-center mt-9">Explore Words by First Letter.</h3>
            <div className='flex justify-center p-4 gap-4 flex-wrap'>
                {listItems}
            </div>


        </div>
    )
}
