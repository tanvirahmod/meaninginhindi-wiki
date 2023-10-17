// import { getWords } from '@/lib/words'
import Link from 'next/link'
import React from 'react'

// generate dynamic metadata-----------------
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: `English to Hindi Word Meaning`,
    description: `Better Word Explanation of English Words in Hindi language.`,
    alternates: {
      canonical: `https://meaninginhindi.wiki/dictionary`
    },
    openGraph: {
      title: `English to Hindi Word Meaning`,
      description: `Better Word Explanation of English Words in Hindi language.`,
      images: 'https://meaninginhindi.wiki/opengraph-image.png'
    },
  }
}
// dynamic metadata ends here-------------------

export default async function GermanMeaning() {

  // 1st letter word search dictionary
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const listItems = letters.map((letter) => (
    <div className='h-10 w-10 shadow-xl ring-1 ring-slate-200 flex justify-center items-center text-violet-700 font-bold' key={letter}>
      <Link href={`/dictionary/by-first-letter/${letter}`}>{letter}</Link>
    </div>
  ));
  return (
    <main className='w-full md:w-3/4 mx-auto h-auto rounded-lg'>
      <div className="w-full lg:w-2/3 mx-auto h-auto p-8 px-10 flex justify-center flex-col items-center gap-4">

        <h2 className="text-slate-600 md:text-3xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-slate-800 text-center">English to Hindi Word Meaning</h2>

        <h3 className="md:text-2xl font-semibold text-slate-800 text-center">Better Word Explanation of English Words in Hindi language.</h3>

        <p className="text-slate-600 text-center">Welcome to our MeaninginHindi English to Hindi online dictionary Website! Here, We&apos;re here to help you understand English words better in Hindi Language. We are not just giving you the simple translation of a word in Hindi, we also provide other information such as parts of speech, pronounciation, phonetic of UK and US, similler words with meaning, synonyms, antonyms, hyponyms, hypernyms and how to use the word in a sentence. It&apos;s like peeling an onion to see all the layers! And to make things even clearer, we&apos;ve got lots of examples to show you how each word is used in real life. </p>
        <p className="text-slate-600 text-center">Whether you&apos;re someone who loves playing with words or you&apos;re trying to learn Hindi language, our website is here to help.</p>
        <p className="text-slate-600 text-center">Let&apos;s have fun exploring the amazing world of words together!</p>

        <h3 className="md:text-2xl font-semibold text-slate-800 text-center mt-9">Explore Words by First Letter.</h3>

        <div className='flex justify-center p-4 gap-4 flex-wrap'>
          {listItems}
        </div>

      </div>
    </main>
  )
}
