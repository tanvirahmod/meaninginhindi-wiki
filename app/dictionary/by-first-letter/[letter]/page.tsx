import React from 'react'
import { getBy1stLetter } from '@/lib/words'
import Link from 'next/link'

// generate dynamic metadata-----------------
import type { Metadata } from 'next'

export async function generateMetadata({ params }: any): Promise<Metadata> {

    return {
        title: `Browse the word by first letter ${params.letter} | meaninginhindi.wiki`,
        description: `Better Word Explanation of English Words in Hindi language. Browse the word by first letter | meaninginhindi.wiki`,
        alternates: {
            canonical: `https://meaninginhindi.wiki/dictionary/by-first-letter/${params.letter}`
        },
        openGraph: {
            title: `Browse the word by first letter ${params.letter} | meaninginhindi.wiki`,
            description: `Better Word Explanation of English Words in Hindi language. Browse the word by first letter | meaninginhindi.wiki`,
            images: 'https://meaninginhindi.wiki/opengraph-image.png'
          },
          robots: {
            index: false,
            follow: true,
          },
    }
}
// dynamic metadata ends here-------------------

export default async function FirstLetter({ params }: any) {
    const firstLetter1: any = await getBy1stLetter(params.letter)
    return (
        <div className='w-full md:w-3/4 mx-auto h-auto rounded-lg px-10 pt-6 text-violet-700 flex flex-col text-center gap-2'>

            <h2 className="text-slate-600 md:text-3xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-slate-800 text-center">English to Hindi Word Meaning</h2>

            <h3 className="md:text-2xl font-semibold text-slate-800 text-center">Better Word Explaination of English Words in Hindi langulage.</h3>

            <h4 className="text-lg font-semibold text-slate-800 text-center mt-9">All Words Starts with &apos;{params.letter}&apos;.</h4>

            {firstLetter1?.map((letter: {
                word: any; id: React.Key | null | undefined; meaning: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined 
}) => (
                <Link key={letter.id} href={`/dictionary/${letter.word}`}>{letter.word} meaning in Hindi</Link>
            ))}
        </div>
    )
}
